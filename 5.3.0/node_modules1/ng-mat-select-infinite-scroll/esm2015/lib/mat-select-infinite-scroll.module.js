import { NgModule } from '@angular/core';
import { MatSelectInfiniteScrollDirective } from './mat-select-infinite-scroll.directive';
import { MatSelectModule } from '@angular/material/select';
export class MatSelectInfiniteScrollModule {
}
MatSelectInfiniteScrollModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatSelectInfiniteScrollDirective],
                imports: [
                    MatSelectModule
                ],
                exports: [MatSelectInfiniteScrollDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1pbmZpbml0ZS1zY3JvbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbWF0LXNlbGVjdC1pbmZpbml0ZS1zY3JvbGwvc3JjL2xpYi9tYXQtc2VsZWN0LWluZmluaXRlLXNjcm9sbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZ0NBQWdDLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFTekQsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBUHpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDaEQsT0FBTyxFQUFFO29CQUNQLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdEluZmluaXRlU2Nyb2xsRGlyZWN0aXZlfSBmcm9tICcuL21hdC1zZWxlY3QtaW5maW5pdGUtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWF0U2VsZWN0SW5maW5pdGVTY3JvbGxEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0U2VsZWN0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtNYXRTZWxlY3RJbmZpbml0ZVNjcm9sbERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0SW5maW5pdGVTY3JvbGxNb2R1bGUge1xufVxuIl19