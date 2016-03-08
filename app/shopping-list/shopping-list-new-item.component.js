System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    console.log('Adding: ', this.item);
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n    \t<div>\n    \t\t<label for=\"item-name\">Name: </label>\n    \t\t<input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    \t</div>\n    \t<div>\n    \t\t<label for=\"item-amount\">Amount: </label>\n    \t\t<input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    \t</div>\n    \t<button (click)=\"onClick()\">Add Item</button>\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzdCLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQWtDLENBQUM7Z0JBTWhFLENBQUM7Z0JBSkEsOENBQU8sR0FBUDtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkF0QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsbVhBVVQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztnREFBQTtnQkFTRixtQ0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdUVBUUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxkaXY+XG4gICAgXHRcdDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lOiA8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxkaXY+XG4gICAgXHRcdDxsYWJlbCBmb3I9XCJpdGVtLWFtb3VudFwiPkFtb3VudDogPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtb3VudFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cbiAgICBgLFxuICAgIG91dHB1dHM6IFsnaXRlbUFkZGVkJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCB7XG5cdGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG5cdGl0ZW1BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXJ9PigpO1xuXG5cdG9uQ2xpY2soKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FkZGluZzogJywgdGhpcy5pdGVtKTtcblx0XHR0aGlzLml0ZW1BZGRlZC5lbWl0KHRoaXMuaXRlbSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
