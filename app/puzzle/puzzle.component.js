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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Num = Math.round(Math.random());
                    this.switch2Num = Math.round(Math.random());
                    this.switch3Num = Math.round(Math.random());
                    this.switch4Num = Math.round(Math.random());
                    console.log(this.switch1Num, this.switch2Num, this.switch3Num, this.switch4Num);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n\t\t<section class=\"setup\">\n\t\t\t<h2>Game Setup</h2>\n\t\t\tEnter your name please:\n\t\t\t<input type=\"text\" #name (keyup)=\"0\">\n\t\t</section>\n\t\t<section \n\t\t\t[ngClass]=\"{\n\t\t\t\tpuzzle: true,\n\t\t\t\tsolved: switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value\n\t\t\t}\" \n\t\t\t[style.display]=\"name.value === '' ? 'none' : 'block'\">\n\t\t\t<h2>The Puzzle | {{switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value ? 'Solved' : 'Not Solved'}}</h2>\n\t\t\t<p>Welcome <span class=\"name\">{{name.value}}</span></p>\n\t\t\t<br>\n\t\t\tSwitch 1:\n\t\t\t<input type=\"text\" #switch1 (keyup)=\"0\"><br>\n\t\t\tSwitch 2:\n\t\t\t<input type=\"text\" #switch2 (keyup)=\"0\"><br>\n\t\t\tSwitch 3:\n\t\t\t<input type=\"text\" #switch3 (keyup)=\"0\"><br>\n\t\t\tSwitch 4:\n\t\t\t<input type=\"text\" #switch4 (keyup)=\"0\"><br>\n\t\t</section>\n\t\t<h2 *ngIf=\"switch1Num == switch1.value && switch2Num == switch2.value && switch3Num == switch3.value && switch4Num == switch4.value\">Congragulations {{name.value}}, you did it!</h2>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUFBO2dCQWNBLENBQUM7Z0JBUkEsa0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO2dCQTNDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsb3FDQXlCVDtxQkFDRCxDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZDQWNDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1wdXp6bGUnXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuXHRcdFx0PGgyPkdhbWUgU2V0dXA8L2gyPlxuXHRcdFx0RW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdDxzZWN0aW9uIFxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHRwdXp6bGU6IHRydWUsXG5cdFx0XHRcdHNvbHZlZDogc3dpdGNoMU51bSA9PSBzd2l0Y2gxLnZhbHVlICYmIHN3aXRjaDJOdW0gPT0gc3dpdGNoMi52YWx1ZSAmJiBzd2l0Y2gzTnVtID09IHN3aXRjaDMudmFsdWUgJiYgc3dpdGNoNE51bSA9PSBzd2l0Y2g0LnZhbHVlXG5cdFx0XHR9XCIgXG5cdFx0XHRbc3R5bGUuZGlzcGxheV09XCJuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jaydcIj5cblx0XHRcdDxoMj5UaGUgUHV6emxlIHwge3tzd2l0Y2gxTnVtID09IHN3aXRjaDEudmFsdWUgJiYgc3dpdGNoMk51bSA9PSBzd2l0Y2gyLnZhbHVlICYmIHN3aXRjaDNOdW0gPT0gc3dpdGNoMy52YWx1ZSAmJiBzd2l0Y2g0TnVtID09IHN3aXRjaDQudmFsdWUgPyAnU29sdmVkJyA6ICdOb3QgU29sdmVkJ319PC9oMj5cblx0XHRcdDxwPldlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuXHRcdFx0PGJyPlxuXHRcdFx0U3dpdGNoIDE6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cblx0XHRcdFN3aXRjaCAyOlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG5cdFx0XHRTd2l0Y2ggMzpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxuXHRcdFx0U3dpdGNoIDQ6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cblx0XHQ8L3NlY3Rpb24+XG5cdFx0PGgyICpuZ0lmPVwic3dpdGNoMU51bSA9PSBzd2l0Y2gxLnZhbHVlICYmIHN3aXRjaDJOdW0gPT0gc3dpdGNoMi52YWx1ZSAmJiBzd2l0Y2gzTnVtID09IHN3aXRjaDMudmFsdWUgJiYgc3dpdGNoNE51bSA9PSBzd2l0Y2g0LnZhbHVlXCI+Q29uZ3JhZ3VsYXRpb25zIHt7bmFtZS52YWx1ZX19LCB5b3UgZGlkIGl0ITwvaDI+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHN3aXRjaDFOdW06IG51bWJlcjtcblx0c3dpdGNoMk51bTogbnVtYmVyO1xuXHRzd2l0Y2gzTnVtOiBudW1iZXI7XG5cdHN3aXRjaDROdW06IG51bWJlcjtcblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5zd2l0Y2gxTnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblx0XHR0aGlzLnN3aXRjaDJOdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXHRcdHRoaXMuc3dpdGNoM051bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cdFx0dGhpcy5zd2l0Y2g0TnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bSx0aGlzLnN3aXRjaDJOdW0sdGhpcy5zd2l0Y2gzTnVtLHRoaXMuc3dpdGNoNE51bSk7XG5cdH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
