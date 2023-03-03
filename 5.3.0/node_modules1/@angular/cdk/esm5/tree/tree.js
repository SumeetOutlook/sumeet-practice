import { isDataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, Input, IterableDiffers, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, of as observableOf, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkTreeNodeDef, CdkTreeNodeOutletContext } from './node';
import { CdkTreeNodeOutlet } from './outlet';
import { getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError } from './tree-errors';
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './outlet';
var CdkTree = /** @class */ (function () {
    function CdkTree(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        /** Level of nodes */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
    }
    Object.defineProperty(CdkTree.prototype, "dataSource", {
        /**
         * Provides a stream containing the latest data array to render. Influenced by the tree's
         * stream of view window (what dataNodes are currently on screen).
         * Data source can be an observable of data array, or a data array to render.
         */
        get: function () { return this._dataSource; },
        set: function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkTree.prototype.ngOnInit = function () {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl) {
            throw getTreeControlMissingError();
        }
    };
    CdkTree.prototype.ngOnDestroy = function () {
        this._nodeOutlet.viewContainer.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    };
    CdkTree.prototype.ngAfterContentChecked = function () {
        var defaultNodeDefs = this._nodeDefs.filter(function (def) { return !def.when; });
        if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    };
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    CdkTree.prototype._switchDataSource = function (dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    };
    /** Set up a subscription for the data provided by the data source. */
    CdkTree.prototype._observeRenderChanges = function () {
        var _this = this;
        var dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = observableOf(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(takeUntil(this._onDestroy))
                .subscribe(function (data) { return _this.renderNodeChanges(data); });
        }
        else {
            throw getTreeNoValidDataSourceError();
        }
    };
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    CdkTree.prototype.renderNodeChanges = function (data, dataDiffer, viewContainer, parentData) {
        var _this = this;
        if (dataDiffer === void 0) { dataDiffer = this._dataDiffer; }
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        var changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                _this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
                _this._levels.delete(item.item);
            }
            else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._changeDetectorRef.detectChanges();
    };
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    CdkTree.prototype._getNodeDef = function (data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        var nodeDef = this._nodeDefs.find(function (def) { return def.when && def.when(i, data); }) || this._defaultNodeDef;
        if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    };
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    CdkTree.prototype.insertNode = function (nodeData, index, viewContainer, parentData) {
        var node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        var context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = this._levels.get(parentData) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    };
    /** @nocollapse */
    CdkTree.ctorParameters = function () { return [
        { type: IterableDiffers },
        { type: ChangeDetectorRef }
    ]; };
    CdkTree.propDecorators = {
        dataSource: [{ type: Input }],
        treeControl: [{ type: Input }],
        trackBy: [{ type: Input }],
        _nodeOutlet: [{ type: ViewChild, args: [CdkTreeNodeOutlet, { static: true },] }],
        _nodeDefs: [{ type: ContentChildren, args: [CdkTreeNodeDef, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
CdkTree.ɵfac = function CdkTree_Factory(t) { return new (t || CdkTree)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CdkTree.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkTree, selectors: [["cdk-tree"]], contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkTreeNodeDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nodeDefs = _t);
    } }, viewQuery: function CdkTree_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    } }, hostAttrs: ["role", "tree", 1, "cdk-tree"], inputs: { dataSource: "dataSource", treeControl: "treeControl", trackBy: "trackBy" }, exportAs: ["cdkTree"], decls: 1, vars: 0, consts: [["cdkTreeNodeOutlet", ""]], template: function CdkTree_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkTreeNodeOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTree, [{
        type: Component,
        args: [{
                selector: 'cdk-tree',
                exportAs: 'cdkTree',
                template: "<ng-container cdkTreeNodeOutlet></ng-container>",
                host: {
                    'class': 'cdk-tree',
                    'role': 'tree'
                },
                encapsulation: ViewEncapsulation.None,
                // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: ɵngcc0.IterableDiffers }, { type: ɵngcc0.ChangeDetectorRef }]; }, { dataSource: [{
            type: Input
        }], treeControl: [{
            type: Input
        }], trackBy: [{
            type: Input
        }], _nodeOutlet: [{
            type: ViewChild,
            args: [CdkTreeNodeOutlet, { static: true }]
        }], _nodeDefs: [{
            type: ContentChildren,
            args: [CdkTreeNodeDef, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();
    return CdkTree;
}());
export { CdkTree };
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
var CdkTreeNode = /** @class */ (function () {
    function CdkTreeNode(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new Subject();
        /** Emits when the node's data has changed. */
        this._dataChanges = new Subject();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */
        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode = this;
    }
    Object.defineProperty(CdkTreeNode.prototype, "data", {
        /** The tree node's data. */
        get: function () { return this._data; },
        set: function (value) {
            if (value !== this._data) {
                this._data = value;
                this._setRoleFromData();
                this._dataChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "isExpanded", {
        get: function () {
            return this._tree.treeControl.isExpanded(this._data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNode.prototype, "level", {
        get: function () {
            return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        },
        enumerable: true,
        configurable: true
    });
    CdkTreeNode.prototype.ngOnDestroy = function () {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Focuses the menu item. Implements for FocusableOption. */
    CdkTreeNode.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    CdkTreeNode.prototype._setRoleFromData = function () {
        var _this = this;
        if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
        }
        else {
            if (!this._tree.treeControl.getChildren) {
                throw getTreeControlFunctionsMissingError();
            }
            var childrenNodes = this._tree.treeControl.getChildren(this._data);
            if (Array.isArray(childrenNodes)) {
                this._setRoleFromChildren(childrenNodes);
            }
            else if (childrenNodes instanceof Observable) {
                childrenNodes.pipe(takeUntil(this._destroyed))
                    .subscribe(function (children) { return _this._setRoleFromChildren(children); });
            }
        }
    };
    CdkTreeNode.prototype._setRoleFromChildren = function (children) {
        this.role = children && children.length ? 'group' : 'treeitem';
    };
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    CdkTreeNode.mostRecentTreeNode = null;
    /** @nocollapse */
    CdkTreeNode.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CdkTree }
    ]; };
    CdkTreeNode.propDecorators = {
        role: [{ type: Input }]
    };
CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) { return new (t || CdkTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(CdkTree)); };
CdkTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNode, selectors: [["cdk-tree-node"]], hostAttrs: [1, "cdk-tree-node"], hostVars: 3, hostBindings: function CdkTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
    } }, inputs: { role: "role" }, exportAs: ["cdkTreeNode"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNode, [{
        type: Directive,
        args: [{
                selector: 'cdk-tree-node',
                exportAs: 'cdkTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'role === "treeitem" ? level : null',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: CdkTree }]; }, { role: [{
            type: Input
        }] }); })();
    return CdkTreeNode;
}());
export { CdkTreeNode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUErQixZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGVBQWUsRUFHZixTQUFTLEVBQ1QsU0FBUyxFQUVULGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFDLGNBQWMsRUFBRSx3QkFBd0IsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUNMLG1DQUFtQyxFQUNuQywwQkFBMEIsRUFDMUIsa0NBQWtDLEVBQ2xDLG1DQUFtQyxFQUNuQyw2QkFBNkIsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBQ0g7QUFFTSxJQTBFSixpQkFBb0IsUUFBeUIsRUFDekIsa0JBQXFDO0FBQUksUUFEekMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7QUFBQyxRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0FBQUMsUUE1RDFELGdFQUFnRTtBQUNsRSxRQUFVLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQzNDLFFBVUUscUJBQXFCO0FBQ3ZCLFFBQVUsWUFBTyxHQUFtQixJQUFJLEdBQUcsRUFBYSxDQUFDO0FBQ3pELFFBb0NFLDZGQUE2RjtB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QUExRkQsSUEwRkM7QUFDRCxTQWpGYSxXQUFXO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2UsIGlzRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUcmFja0J5RnVuY3Rpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VHJlZUNvbnRyb2x9IGZyb20gJy4vY29udHJvbC90cmVlLWNvbnRyb2wnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZURlZiwgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0fSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZU91dGxldH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHtcbiAgZ2V0VHJlZUNvbnRyb2xGdW5jdGlvbnNNaXNzaW5nRXJyb3IsXG4gIGdldFRyZWVDb250cm9sTWlzc2luZ0Vycm9yLFxuICBnZXRUcmVlTWlzc2luZ01hdGNoaW5nTm9kZURlZkVycm9yLFxuICBnZXRUcmVlTXVsdGlwbGVEZWZhdWx0Tm9kZURlZnNFcnJvcixcbiAgZ2V0VHJlZU5vVmFsaWREYXRhU291cmNlRXJyb3Jcbn0gZnJvbSAnLi90cmVlLWVycm9ycyc7XG5cbi8qKlxuICogQ0RLIHRyZWUgY29tcG9uZW50IHRoYXQgY29ubmVjdHMgd2l0aCBhIGRhdGEgc291cmNlIHRvIHJldHJpZXZlIGRhdGEgb2YgdHlwZSBgVGAgYW5kIHJlbmRlcnNcbiAqIGRhdGFOb2RlcyB3aXRoIGhpZXJhcmNoeS4gVXBkYXRlcyB0aGUgZGF0YU5vZGVzIHdoZW4gbmV3IGRhdGEgaXMgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZScsXG4gIGV4cG9ydEFzOiAnY2RrVHJlZScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciBjZGtUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5gLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay10cmVlJyxcbiAgICAncm9sZSc6ICd0cmVlJyxcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblxuICAvLyBUaGUgXCJPblB1c2hcIiBzdGF0dXMgZm9yIHRoZSBgQ2RrVHJlZWAgY29tcG9uZW50IGlzIGVmZmVjdGl2ZWx5IGEgbm9vcCwgc28gd2UgYXJlIHJlbW92aW5nIGl0LlxuICAvLyBUaGUgdmlldyBmb3IgYENka1RyZWVgIGNvbnNpc3RzIGVudGlyZWx5IG9mIHRlbXBsYXRlcyBkZWNsYXJlZCBpbiBvdGhlciB2aWV3cy4gQXMgdGhleSBhcmVcbiAgLy8gZGVjbGFyZWQgZWxzZXdoZXJlLCB0aGV5IGFyZSBjaGVja2VkIHdoZW4gdGhlaXIgZGVjbGFyYXRpb24gcG9pbnRzIGFyZSBjaGVja2VkLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIENvbGxlY3Rpb25WaWV3ZXIsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBEaWZmZXIgdXNlZCB0byBmaW5kIHRoZSBjaGFuZ2VzIGluIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8VD47XG5cbiAgLyoqIFN0b3JlcyB0aGUgbm9kZSBkZWZpbml0aW9uIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHdoZW4gcHJlZGljYXRlLiAqL1xuICBwcml2YXRlIF9kZWZhdWx0Tm9kZURlZjogQ2RrVHJlZU5vZGVEZWY8VD4gfCBudWxsO1xuXG4gIC8qKiBEYXRhIHN1YnNjcmlwdGlvbiAqL1xuICBwcml2YXRlIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIC8qKiBMZXZlbCBvZiBub2RlcyAqL1xuICBwcml2YXRlIF9sZXZlbHM6IE1hcDxULCBudW1iZXI+ID0gbmV3IE1hcDxULCBudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBkYXRhIGFycmF5IHRvIHJlbmRlci4gSW5mbHVlbmNlZCBieSB0aGUgdHJlZSdzXG4gICAqIHN0cmVhbSBvZiB2aWV3IHdpbmRvdyAod2hhdCBkYXRhTm9kZXMgYXJlIGN1cnJlbnRseSBvbiBzY3JlZW4pLlxuICAgKiBEYXRhIHNvdXJjZSBjYW4gYmUgYW4gb2JzZXJ2YWJsZSBvZiBkYXRhIGFycmF5LCBvciBhIGRhdGEgYXJyYXkgdG8gcmVuZGVyLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRhdGFTb3VyY2UoKTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IFRbXSB7IHJldHVybiB0aGlzLl9kYXRhU291cmNlOyB9XG4gIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBUW10pIHtcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAhPT0gZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IFRbXTtcblxuICAvKiogVGhlIHRyZWUgY29udHJvbGxlciAqL1xuICBASW5wdXQoKSB0cmVlQ29udHJvbDogVHJlZUNvbnRyb2w8VD47XG5cbiAgLyoqXG4gICAqIFRyYWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlcyBpbiBkYXRhIGNoYW5nZXMuIFVzZWQgc2ltaWxhcmx5XG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBub2RlIG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSBub2RlIGJhc2VkIG9uIGl0cyBkYXRhXG4gICAqIHJlbGF0aXZlIHRvIHRoZSBmdW5jdGlvbiB0byBrbm93IGlmIGEgbm9kZSBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cbiAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGBpbmRleGAgYW5kIGBpdGVtYC5cbiAgICovXG4gIEBJbnB1dCgpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICAvLyBPdXRsZXRzIHdpdGhpbiB0aGUgdHJlZSdzIHRlbXBsYXRlIHdoZXJlIHRoZSBkYXRhTm9kZXMgd2lsbCBiZSBpbnNlcnRlZC5cbiAgQFZpZXdDaGlsZChDZGtUcmVlTm9kZU91dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9ub2RlT3V0bGV0OiBDZGtUcmVlTm9kZU91dGxldDtcblxuICAvKiogVGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgdGhlIHRyZWUgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtUcmVlTm9kZURlZiwge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkZXNjZW5kYW50czogdHJ1ZWAsIGJlY2F1c2UgSXZ5IHdpbGwgbm8gbG9uZ2VyIG1hdGNoXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxuICAgIGRlc2NlbmRhbnRzOiB0cnVlXG4gIH0pIF9ub2RlRGVmczogUXVlcnlMaXN0PENka1RyZWVOb2RlRGVmPFQ+PjtcblxuICAvLyBUT0RPKHRpbmF5dWFuZ2FvKTogU2V0dXAgYSBsaXN0ZW5lciBmb3Igc2Nyb2xsaW5nLCBlbWl0IHRoZSBjYWxjdWxhdGVkIHZpZXcgdG8gdmlld0NoYW5nZS5cbiAgLy8gICAgIFJlbW92ZSB0aGUgTUFYX1ZBTFVFIGluIHZpZXdDaGFuZ2VcbiAgLyoqXG4gICAqIFN0cmVhbSBjb250YWluaW5nIHRoZSBsYXRlc3QgaW5mb3JtYXRpb24gb24gd2hhdCByb3dzIGFyZSBiZWluZyBkaXNwbGF5ZWQgb24gc2NyZWVuLlxuICAgKiBDYW4gYmUgdXNlZCBieSB0aGUgZGF0YSBzb3VyY2UgdG8gYXMgYSBoZXVyaXN0aWMgb2Ygd2hhdCBkYXRhIHNob3VsZCBiZSBwcm92aWRlZC5cbiAgICovXG4gIHZpZXdDaGFuZ2UgPVxuICAgIG5ldyBCZWhhdmlvclN1YmplY3Q8e3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyfT4oe3N0YXJ0OiAwLCBlbmQ6IE51bWJlci5NQVhfVkFMVUV9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9kYXRhRGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKFtdKS5jcmVhdGUodGhpcy50cmFja0J5KTtcbiAgICBpZiAoIXRoaXMudHJlZUNvbnRyb2wpIHtcbiAgICAgIHRocm93IGdldFRyZWVDb250cm9sTWlzc2luZ0Vycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG5cbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgJiYgdHlwZW9mICh0aGlzLl9kYXRhU291cmNlIGFzIERhdGFTb3VyY2U8VD4pLmRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICh0aGlzLmRhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZTxUPikuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0YVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGNvbnN0IGRlZmF1bHROb2RlRGVmcyA9IHRoaXMuX25vZGVEZWZzLmZpbHRlcihkZWYgPT4gIWRlZi53aGVuKTtcbiAgICBpZiAoZGVmYXVsdE5vZGVEZWZzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IGdldFRyZWVNdWx0aXBsZURlZmF1bHROb2RlRGVmc0Vycm9yKCk7XG4gICAgfVxuICAgIHRoaXMuX2RlZmF1bHROb2RlRGVmID0gZGVmYXVsdE5vZGVEZWZzWzBdO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLl9ub2RlRGVmcyAmJiAhdGhpcy5fZGF0YVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIFRPRE8odGluYXl1YW5nYW8pOiBXb3JrIG9uIGtleWJvYXJkIHRyYXZlcnNhbCBhbmQgYWN0aW9ucywgbWFrZSBzdXJlIGl0J3Mgd29ya2luZyBmb3IgUlRMXG4gIC8vICAgICBhbmQgbmVzdGVkIHRyZWVzLlxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdG8gdGhlIHByb3ZpZGVkIGRhdGEgc291cmNlIGJ5IHJlc2V0dGluZyB0aGUgZGF0YSBhbmQgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBjdXJyZW50XG4gICAqIHJlbmRlciBjaGFuZ2Ugc3Vic2NyaXB0aW9uIGlmIG9uZSBleGlzdHMuIElmIHRoZSBkYXRhIHNvdXJjZSBpcyBudWxsLCBpbnRlcnByZXQgdGhpcyBieVxuICAgKiBjbGVhcmluZyB0aGUgbm9kZSBvdXRsZXQuIE90aGVyd2lzZSBzdGFydCBsaXN0ZW5pbmcgZm9yIG5ldyBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdKSB7XG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgJiYgdHlwZW9mICh0aGlzLl9kYXRhU291cmNlIGFzIERhdGFTb3VyY2U8VD4pLmRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICh0aGlzLmRhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZTxUPikuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0YVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRoZSBhbGwgZGF0YU5vZGVzIGlmIHRoZXJlIGlzIG5vdyBubyBkYXRhIHNvdXJjZVxuICAgIGlmICghZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgaWYgKHRoaXMuX25vZGVEZWZzKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXQgdXAgYSBzdWJzY3JpcHRpb24gZm9yIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKSB7XG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8VFtdIHwgUmVhZG9ubHlBcnJheTxUPj4gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNEYXRhU291cmNlKHRoaXMuX2RhdGFTb3VyY2UpKSB7XG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZS5jb25uZWN0KHRoaXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IG9ic2VydmFibGVPZih0aGlzLl9kYXRhU291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVN0cmVhbSkge1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW0ucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBnZXRUcmVlTm9WYWxpZERhdGFTb3VyY2VFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVjayBmb3IgY2hhbmdlcyBtYWRlIGluIHRoZSBkYXRhIGFuZCByZW5kZXIgZWFjaCBjaGFuZ2UgKG5vZGUgYWRkZWQvcmVtb3ZlZC9tb3ZlZCkuICovXG4gIHJlbmRlck5vZGVDaGFuZ2VzKGRhdGE6IFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4sIGRhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPFQ+ID0gdGhpcy5fZGF0YURpZmZlcixcbiAgICAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RGF0YT86IFQpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gZGF0YURpZmZlci5kaWZmKGRhdGEpO1xuICAgIGlmICghY2hhbmdlcykgeyByZXR1cm47IH1cblxuICAgIGNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbigoaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RlZFByZXZpb3VzSW5kZXg6IG51bWJlciB8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnROb2RlKGRhdGFbY3VycmVudEluZGV4IV0sIGN1cnJlbnRJbmRleCEsIHZpZXdDb250YWluZXIsIHBhcmVudERhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4ISk7XG4gICAgICAgICAgdGhpcy5fbGV2ZWxzLmRlbGV0ZShpdGVtLml0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3Q29udGFpbmVyLmdldChhZGp1c3RlZFByZXZpb3VzSW5kZXghKTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldyEsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBtYXRjaGluZyBub2RlIGRlZmluaXRpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhpcyBub2RlIGRhdGEuIElmIHRoZXJlIGlzIG9ubHlcbiAgICogb25lIG5vZGUgZGVmaW5pdGlvbiwgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgZmluZCB0aGUgbm9kZSBkZWZpbml0aW9uIHRoYXQgaGFzIGEgd2hlblxuICAgKiBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgd2l0aCB0aGUgZGF0YS4gSWYgbm9uZSByZXR1cm4gdHJ1ZSwgcmV0dXJuIHRoZSBkZWZhdWx0IG5vZGVcbiAgICogZGVmaW5pdGlvbi5cbiAgICovXG4gIF9nZXROb2RlRGVmKGRhdGE6IFQsIGk6IG51bWJlcik6IENka1RyZWVOb2RlRGVmPFQ+IHtcbiAgICBpZiAodGhpcy5fbm9kZURlZnMubGVuZ3RoID09PSAxKSB7IHJldHVybiB0aGlzLl9ub2RlRGVmcy5maXJzdDsgfVxuXG4gICAgY29uc3Qgbm9kZURlZiA9XG4gICAgICB0aGlzLl9ub2RlRGVmcy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHwgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XG4gICAgaWYgKCFub2RlRGVmKSB7IHRocm93IGdldFRyZWVNaXNzaW5nTWF0Y2hpbmdOb2RlRGVmRXJyb3IoKTsgfVxuXG4gICAgcmV0dXJuIG5vZGVEZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbWJlZGRlZCB2aWV3IGZvciB0aGUgZGF0YSBub2RlIHRlbXBsYXRlIGFuZCBwbGFjZSBpdCBpbiB0aGUgY29ycmVjdCBpbmRleCBsb2NhdGlvblxuICAgKiB3aXRoaW4gdGhlIGRhdGEgbm9kZSB2aWV3IGNvbnRhaW5lci5cbiAgICovXG4gIGluc2VydE5vZGUobm9kZURhdGE6IFQsIGluZGV4OiBudW1iZXIsIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmLCBwYXJlbnREYXRhPzogVCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKG5vZGVEYXRhLCBpbmRleCk7XG5cbiAgICAvLyBOb2RlIGNvbnRleHQgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIGNyZWF0ZWQgZW1iZWRkZWQgdmlld1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0PFQ+KG5vZGVEYXRhKTtcblxuICAgIC8vIElmIHRoZSB0cmVlIGlzIGZsYXQgdHJlZSwgdGhlbiB1c2UgdGhlIGBnZXRMZXZlbGAgZnVuY3Rpb24gaW4gZmxhdCB0cmVlIGNvbnRyb2xcbiAgICAvLyBPdGhlcndpc2UsIHVzZSB0aGUgbGV2ZWwgb2YgcGFyZW50IG5vZGUuXG4gICAgaWYgKHRoaXMudHJlZUNvbnRyb2wuZ2V0TGV2ZWwpIHtcbiAgICAgIGNvbnRleHQubGV2ZWwgPSB0aGlzLnRyZWVDb250cm9sLmdldExldmVsKG5vZGVEYXRhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnREYXRhICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9sZXZlbHMuaGFzKHBhcmVudERhdGEpKSB7XG4gICAgICBjb250ZXh0LmxldmVsID0gdGhpcy5fbGV2ZWxzLmdldChwYXJlbnREYXRhKSEgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxldmVsID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzLnNldChub2RlRGF0YSwgY29udGV4dC5sZXZlbCk7XG5cbiAgICAvLyBVc2UgZGVmYXVsdCB0cmVlIG5vZGVPdXRsZXQsIG9yIG5lc3RlZCBub2RlJ3Mgbm9kZU91dGxldFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHZpZXdDb250YWluZXIgPyB2aWV3Q29udGFpbmVyIDogdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcobm9kZS50ZW1wbGF0ZSwgY29udGV4dCwgaW5kZXgpO1xuXG4gICAgLy8gU2V0IHRoZSBkYXRhIHRvIGp1c3QgY3JlYXRlZCBgQ2RrVHJlZU5vZGVgLlxuICAgIC8vIFRoZSBgQ2RrVHJlZU5vZGVgIGNyZWF0ZWQgZnJvbSBgY3JlYXRlRW1iZWRkZWRWaWV3YCB3aWxsIGJlIHNhdmVkIGluIHN0YXRpYyB2YXJpYWJsZVxuICAgIC8vICAgICBgbW9zdFJlY2VudFRyZWVOb2RlYC4gV2UgZ2V0IGl0IGZyb20gc3RhdGljIHZhcmlhYmxlIGFuZCBwYXNzIHRoZSBub2RlIGRhdGEgdG8gaXQuXG4gICAgaWYgKENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSkge1xuICAgICAgQ2RrVHJlZU5vZGUubW9zdFJlY2VudFRyZWVOb2RlLmRhdGEgPSBub2RlRGF0YTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFRyZWUgbm9kZSBmb3IgQ2RrVHJlZS4gSXQgY29udGFpbnMgdGhlIGRhdGEgaW4gdGhlIHRyZWUgbm9kZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtbm9kZScsXG4gIGV4cG9ydEFzOiAnY2RrVHJlZU5vZGUnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2lzRXhwYW5kZWQnLFxuICAgICdbYXR0ci5hcmlhLWxldmVsXSc6ICdyb2xlID09PSBcInRyZWVpdGVtXCIgPyBsZXZlbCA6IG51bGwnLFxuICAgICdbYXR0ci5yb2xlXSc6ICdyb2xlJyxcbiAgICAnY2xhc3MnOiAnY2RrLXRyZWUtbm9kZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOb2RlPFQ+IGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIG1vc3QgcmVjZW50bHkgY3JlYXRlZCBgQ2RrVHJlZU5vZGVgLiBXZSBzYXZlIGl0IGluIHN0YXRpYyB2YXJpYWJsZSBzbyB3ZSBjYW4gcmV0cmlldmUgaXRcbiAgICogaW4gYENka1RyZWVgIGFuZCBzZXQgdGhlIGRhdGEgdG8gaXQuXG4gICAqL1xuICBzdGF0aWMgbW9zdFJlY2VudFRyZWVOb2RlOiBDZGtUcmVlTm9kZTxhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcm90ZWN0ZWQgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG5vZGUncyBkYXRhIGhhcyBjaGFuZ2VkLiAqL1xuICBfZGF0YUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBUaGUgdHJlZSBub2RlJ3MgZGF0YS4gKi9cbiAgZ2V0IGRhdGEoKTogVCB7IHJldHVybiB0aGlzLl9kYXRhOyB9XG4gIHNldCBkYXRhKHZhbHVlOiBUKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgICB0aGlzLl9zZXRSb2xlRnJvbURhdGEoKTtcbiAgICAgIHRoaXMuX2RhdGFDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9kYXRhOiBUO1xuXG4gIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90cmVlLnRyZWVDb250cm9sLmlzRXhwYW5kZWQodGhpcy5fZGF0YSk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRMZXZlbCA/IHRoaXMuX3RyZWUudHJlZUNvbnRyb2wuZ2V0TGV2ZWwodGhpcy5fZGF0YSkgOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSByb2xlIG9mIHRoZSBub2RlIHNob3VsZCBiZSAnZ3JvdXAnIGlmIGl0J3MgYW4gaW50ZXJuYWwgbm9kZSxcbiAgICogYW5kICd0cmVlaXRlbScgaWYgaXQncyBhIGxlYWYgbm9kZS5cbiAgICovXG4gIEBJbnB1dCgpIHJvbGU6ICd0cmVlaXRlbScgfCAnZ3JvdXAnID0gJ3RyZWVpdGVtJztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3RyZWU6IENka1RyZWU8VD4pIHtcbiAgICBDZGtUcmVlTm9kZS5tb3N0UmVjZW50VHJlZU5vZGUgPSB0aGlzIGFzIENka1RyZWVOb2RlPFQ+O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgbGFzdCB0cmVlIG5vZGUgYmVpbmcgZGVzdHJveWVkLFxuICAgIC8vIGNsZWFyIG91dCB0aGUgcmVmZXJlbmNlIHRvIGF2b2lkIGxlYWtpbmcgbWVtb3J5LlxuICAgIGlmIChDZGtUcmVlTm9kZS5tb3N0UmVjZW50VHJlZU5vZGUgPT09IHRoaXMpIHtcbiAgICAgIENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIG1lbnUgaXRlbS4gSW1wbGVtZW50cyBmb3IgRm9jdXNhYmxlT3B0aW9uLiAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0Um9sZUZyb21EYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90cmVlLnRyZWVDb250cm9sLmlzRXhwYW5kYWJsZSkge1xuICAgICAgdGhpcy5yb2xlID0gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5pc0V4cGFuZGFibGUodGhpcy5fZGF0YSkgPyAnZ3JvdXAnIDogJ3RyZWVpdGVtJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldENoaWxkcmVuKSB7XG4gICAgICAgIHRocm93IGdldFRyZWVDb250cm9sRnVuY3Rpb25zTWlzc2luZ0Vycm9yKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZHJlbk5vZGVzID0gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRDaGlsZHJlbih0aGlzLl9kYXRhKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuTm9kZXMpKSB7XG4gICAgICAgIHRoaXMuX3NldFJvbGVGcm9tQ2hpbGRyZW4oY2hpbGRyZW5Ob2RlcyBhcyBUW10pO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbk5vZGVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICBjaGlsZHJlbk5vZGVzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNoaWxkcmVuID0+IHRoaXMuX3NldFJvbGVGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3NldFJvbGVGcm9tQ2hpbGRyZW4oY2hpbGRyZW46IFRbXSkge1xuICAgIHRoaXMucm9sZSA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA/ICdncm91cCcgOiAndHJlZWl0ZW0nO1xuICB9XG59XG4iXX0=