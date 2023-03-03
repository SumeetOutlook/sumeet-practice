import { __extends } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentChildren, Directive, ElementRef, IterableDiffers, QueryList, } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet } from './outlet';
import { CdkTree, CdkTreeNode } from './tree';
import { getTreeControlFunctionsMissingError } from './tree-errors';
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 */
import * as ɵngcc0 from '@angular/core';
var CdkNestedTreeNode = /** @class */ (function (_super) {
    __extends(CdkNestedTreeNode, _super);
    function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this = _super.call(this, _elementRef, _tree) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this._differs = _differs;
        return _this;
    }
    CdkNestedTreeNode.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
        }
        var childrenNodes = this._tree.treeControl.getChildren(this.data);
        if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(childrenNodes);
        }
        else if (childrenNodes instanceof Observable) {
            childrenNodes.pipe(takeUntil(this._destroyed))
                .subscribe(function (result) { return _this.updateChildrenNodes(result); });
        }
        this.nodeOutlet.changes.pipe(takeUntil(this._destroyed))
            .subscribe(function () { return _this.updateChildrenNodes(); });
    };
    CdkNestedTreeNode.prototype.ngOnDestroy = function () {
        this._clear();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Add children dataNodes to the NodeOutlet */
    CdkNestedTreeNode.prototype.updateChildrenNodes = function (children) {
        var outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            var viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
        }
    };
    /** Clear the children dataNodes. */
    CdkNestedTreeNode.prototype._clear = function () {
        var outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    };
    /** Gets the outlet for the current node. */
    CdkNestedTreeNode.prototype._getNodeOutlet = function () {
        var _this = this;
        var outlets = this.nodeOutlet;
        // Note that since we use `descendants: true` on the query, we have to ensure
        // that we don't pick up the outlet of a child node by accident.
        return outlets && outlets.find(function (outlet) { return !outlet._node || outlet._node === _this; });
    };
    /** @nocollapse */
    CdkNestedTreeNode.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CdkTree },
        { type: IterableDiffers }
    ]; };
    CdkNestedTreeNode.propDecorators = {
        nodeOutlet: [{ type: ContentChildren, args: [CdkTreeNodeOutlet, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) { return new (t || CdkNestedTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(CdkTree), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkNestedTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkNestedTreeNode, selectors: [["cdk-nested-tree-node"]], contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeOutlet = _t);
    } }, hostAttrs: [1, "cdk-tree-node", "cdk-nested-tree-node"], hostVars: 2, hostBindings: function CdkNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, exportAs: ["cdkNestedTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
            { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkNestedTreeNode, [{
        type: Directive,
        args: [{
                selector: 'cdk-nested-tree-node',
                exportAs: 'cdkNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'cdk-tree-node cdk-nested-tree-node'
                },
                providers: [
                    { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: CdkTree }, { type: ɵngcc0.IterableDiffers }]; }, { nodeOutlet: [{
            type: ContentChildren,
            args: [CdkTreeNodeOutlet, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();
    return CdkNestedTreeNode;
}(CdkTreeNode));
export { CdkNestedTreeNode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW5vZGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS9uZXN0ZWQtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFFVixlQUFlLEVBRWYsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFFVSxJQVdnQyxxQ0FBYztBQUFDLElBZXZELDJCQUFzQixXQUFvQyxFQUNwQyxLQUFpQixFQUNqQixRQUF5QjtBQUNqRCxRQUhFLFlBR0Usa0JBQU0sV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUMxQjtBQUNILFFBTHdCLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQ3JDLFdBQUssR0FBTCxLQUFLLENBQVk7QUFBQyxRQUNsQixjQUFRLEdBQVIsUUFBUSxDQUFpQjtBQUFDO0FBQy9CLElBQ2pCLENBQUM7QUFDSCxJQUNFLDhDQUFrQixHQUFsQjtBQUFjLFFBQWQsaUJBY0M7QUFDSCxRQWRJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FB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QUssS0FBSyxLQUFJLEVBQXRDLENBQXNDLENBQUMsQ0FBQztBQUNyRixJQUFFLENBQUMsQ0F6RU07QUFBQzs4QkFiVCxTQUFTLFNBQUMsaERBYXNCO1FBWi9CLFFBQVEsRUFBRSxsQkFZbUYsZ0JBaEM3RixVQUFVO1VBb0JzQixWQW5CaEMsZ0JBU00sT0FBTztLQVdiLFFBQVEsRUFBRSxmQVhPLGdCQVJqQixlQUFlO0FBbUJjLEFBbEI5QjtZQW1CQyxJQUFJLEVBQUUsbEJBbkJHO0dBb0JQLHNCQUFzQixFQUFFLFlBQVksMEJBQ3BDLGpFQWxCRiw2QkFrQ0MsZUFBZSxTQUFDLGlCQUFpQixFQUFFO0lBaEJyQixFQUFFLE1BQU0sMEJBQ3JCLE9BQU8sRUFBRSxvQ0FBb0MsbkZBZ0JqRCx3QkFBSSx1RUFBdUU7VUFmeEUsc0JBQ0QsU0FBUyxFQUFFLDBCQUNULHJFQWNKLHdCQUFJLDhDQUE4QztBQWQ3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxuQ0FleEMsd0JBQUksV0FBVyxFQUFFLElBQUk7VUFmb0MsRUFBQyxaQWdCMUQscUJBQUc7QUFDQztJQWhCQSxFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsc0JBQ3JFLGtCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWNTO0FBQUMsSUE2RFgsd0JBQUM7QUFDQSxDQURBLEFBdkZELENBYTBDLFdBQVcsR0EwRXBEO0FBQ0QsU0EzRWEsaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFLCBDZGtUcmVlTm9kZU91dGxldH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHtDZGtUcmVlLCBDZGtUcmVlTm9kZX0gZnJvbSAnLi90cmVlJztcbmltcG9ydCB7Z2V0VHJlZUNvbnRyb2xGdW5jdGlvbnNNaXNzaW5nRXJyb3J9IGZyb20gJy4vdHJlZS1lcnJvcnMnO1xuXG4vKipcbiAqIE5lc3RlZCBub2RlIGlzIGEgY2hpbGQgb2YgYDxjZGstdHJlZT5gLiBJdCB3b3JrcyB3aXRoIG5lc3RlZCB0cmVlLlxuICogQnkgdXNpbmcgYGNkay1uZXN0ZWQtdHJlZS1ub2RlYCBjb21wb25lbnQgaW4gdHJlZSBub2RlIHRlbXBsYXRlLCBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IG5vZGUgd2lsbFxuICogYmUgYWRkZWQgaW4gdGhlIGBjZGtUcmVlTm9kZU91dGxldGAgaW4gdHJlZSBub2RlIHRlbXBsYXRlLlxuICogVGhlIGNoaWxkcmVuIG9mIG5vZGUgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGBjZGtUcmVlTm9kZU91dGxldGAuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1uZXN0ZWQtdHJlZS1ub2RlJyxcbiAgZXhwb3J0QXM6ICdjZGtOZXN0ZWRUcmVlTm9kZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnaXNFeHBhbmRlZCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdjbGFzcyc6ICdjZGstdHJlZS1ub2RlIGNkay1uZXN0ZWQtdHJlZS1ub2RlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IENka1RyZWVOb2RlLCB1c2VFeGlzdGluZzogQ2RrTmVzdGVkVHJlZU5vZGV9LFxuICAgIHtwcm92aWRlOiBDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFLCB1c2VFeGlzdGluZzogQ2RrTmVzdGVkVHJlZU5vZGV9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrTmVzdGVkVHJlZU5vZGU8VD4gZXh0ZW5kcyBDZGtUcmVlTm9kZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBEaWZmZXIgdXNlZCB0byBmaW5kIHRoZSBjaGFuZ2VzIGluIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8VD47XG5cbiAgLyoqIFRoZSBjaGlsZHJlbiBkYXRhIGRhdGFOb2RlcyBvZiBjdXJyZW50IG5vZGUuIFRoZXkgd2lsbCBiZSBwbGFjZWQgaW4gYENka1RyZWVOb2RlT3V0bGV0YC4gKi9cbiAgcHJvdGVjdGVkIF9jaGlsZHJlbjogVFtdO1xuXG4gIC8qKiBUaGUgY2hpbGRyZW4gbm9kZSBwbGFjZWhvbGRlci4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtUcmVlTm9kZU91dGxldCwge1xuICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkZXNjZW5kYW50czogdHJ1ZWAsIGJlY2F1c2UgSXZ5IHdpbGwgbm8gbG9uZ2VyIG1hdGNoXG4gICAgLy8gaW5kaXJlY3QgZGVzY2VuZGFudHMgaWYgaXQncyBsZWZ0IGFzIGZhbHNlLlxuICAgIGRlc2NlbmRhbnRzOiB0cnVlXG4gIH0pXG4gIG5vZGVPdXRsZXQ6IFF1ZXJ5TGlzdDxDZGtUcmVlTm9kZU91dGxldD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF90cmVlOiBDZGtUcmVlPFQ+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfdHJlZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZChbXSkuY3JlYXRlKHRoaXMuX3RyZWUudHJhY2tCeSk7XG4gICAgaWYgKCF0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldENoaWxkcmVuKSB7XG4gICAgICB0aHJvdyBnZXRUcmVlQ29udHJvbEZ1bmN0aW9uc01pc3NpbmdFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbk5vZGVzID0gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRDaGlsZHJlbih0aGlzLmRhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuTm9kZXMpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuTm9kZXMoY2hpbGRyZW5Ob2RlcyBhcyBUW10pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5Ob2RlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGNoaWxkcmVuTm9kZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy51cGRhdGVDaGlsZHJlbk5vZGVzKHJlc3VsdCkpO1xuICAgIH1cbiAgICB0aGlzLm5vZGVPdXRsZXQuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ2hpbGRyZW5Ob2RlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBBZGQgY2hpbGRyZW4gZGF0YU5vZGVzIHRvIHRoZSBOb2RlT3V0bGV0ICovXG4gIHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbk5vZGVzKGNoaWxkcmVuPzogVFtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3V0bGV0ID0gdGhpcy5fZ2V0Tm9kZU91dGxldCgpO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKG91dGxldCAmJiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IG91dGxldC52aWV3Q29udGFpbmVyO1xuICAgICAgdGhpcy5fdHJlZS5yZW5kZXJOb2RlQ2hhbmdlcyh0aGlzLl9jaGlsZHJlbiwgdGhpcy5fZGF0YURpZmZlciwgdmlld0NvbnRhaW5lciwgdGhpcy5fZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc2V0IHRoZSBkYXRhIGRpZmZlciBpZiB0aGVyZSdzIG5vIGNoaWxkcmVuIG5vZGVzIGRpc3BsYXllZFxuICAgICAgdGhpcy5fZGF0YURpZmZlci5kaWZmKFtdKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXIgdGhlIGNoaWxkcmVuIGRhdGFOb2Rlcy4gKi9cbiAgcHJvdGVjdGVkIF9jbGVhcigpOiB2b2lkIHtcbiAgICBjb25zdCBvdXRsZXQgPSB0aGlzLl9nZXROb2RlT3V0bGV0KCk7XG4gICAgaWYgKG91dGxldCkge1xuICAgICAgb3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2RhdGFEaWZmZXIuZGlmZihbXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIG91dGxldCBmb3IgdGhlIGN1cnJlbnQgbm9kZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0Tm9kZU91dGxldCgpIHtcbiAgICBjb25zdCBvdXRsZXRzID0gdGhpcy5ub2RlT3V0bGV0O1xuXG4gICAgLy8gTm90ZSB0aGF0IHNpbmNlIHdlIHVzZSBgZGVzY2VuZGFudHM6IHRydWVgIG9uIHRoZSBxdWVyeSwgd2UgaGF2ZSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IHdlIGRvbid0IHBpY2sgdXAgdGhlIG91dGxldCBvZiBhIGNoaWxkIG5vZGUgYnkgYWNjaWRlbnQuXG4gICAgcmV0dXJuIG91dGxldHMgJiYgb3V0bGV0cy5maW5kKG91dGxldCA9PiAhb3V0bGV0Ll9ub2RlIHx8IG91dGxldC5fbm9kZSA9PT0gdGhpcyk7XG4gIH1cbn1cbiJdfQ==