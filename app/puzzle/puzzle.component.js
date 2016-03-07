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
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n\t\t<section class=\"setup\">\n\t\t\t<h2>Game Setup</h2>\n\t\t\tEnter your name please:\n\t\t\t<input type=\"text\" #name (keyup)=\"0\">\n\t\t</section>\n\t\t<section \n\t\t\t[ngClass]=\"{\n\t\t\t\tpuzzle: true,\n\t\t\t\tsolved: switch1Num === switch1.value && switch2Num === switch2.value && switch3Num === switch3.value && switch4Num === switch4.value\n\t\t\t}\" \n\t\t\t[style.display]=\"name.value === '' ? 'none' : 'block'\">\n\t\t\t<h2>The Puzzle:</h2>\n\t\t\t<p>Welcome <span class=\"name\">XXX</span></p>\n\t\t\t<br>\n\t\t\tSwitch 1:\n\t\t\t<input type=\"text\" #switch1><br>\n\t\t\tSwitch 2:\n\t\t\t<input type=\"text\" #switch2><br>\n\t\t\tSwitch 3:\n\t\t\t<input type=\"text\" #switch3><br>\n\t\t\tSwitch 4:\n\t\t\t<input type=\"text\" #switch4><br>\n\t\t</section>\n\t\t<h2>Congragulations XXX, you did it!</h2>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUFBO2dCQUtBLENBQUM7Z0JBbkNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwrekJBeUJUO3FCQUNELENBQUM7O21DQUFBO2dCQU9GLHNCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCw2Q0FLQyxDQUFBIiwiZmlsZSI6InB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1wdXp6bGUnXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuXHRcdFx0PGgyPkdhbWUgU2V0dXA8L2gyPlxuXHRcdFx0RW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdDxzZWN0aW9uIFxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHRwdXp6bGU6IHRydWUsXG5cdFx0XHRcdHNvbHZlZDogc3dpdGNoMU51bSA9PT0gc3dpdGNoMS52YWx1ZSAmJiBzd2l0Y2gyTnVtID09PSBzd2l0Y2gyLnZhbHVlICYmIHN3aXRjaDNOdW0gPT09IHN3aXRjaDMudmFsdWUgJiYgc3dpdGNoNE51bSA9PT0gc3dpdGNoNC52YWx1ZVxuXHRcdFx0fVwiIFxuXHRcdFx0W3N0eWxlLmRpc3BsYXldPVwibmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snXCI+XG5cdFx0XHQ8aDI+VGhlIFB1enpsZTo8L2gyPlxuXHRcdFx0PHA+V2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj5YWFg8L3NwYW4+PC9wPlxuXHRcdFx0PGJyPlxuXHRcdFx0U3dpdGNoIDE6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMT48YnI+XG5cdFx0XHRTd2l0Y2ggMjpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyPjxicj5cblx0XHRcdFN3aXRjaCAzOlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDM+PGJyPlxuXHRcdFx0U3dpdGNoIDQ6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoND48YnI+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdDxoMj5Db25ncmFndWxhdGlvbnMgWFhYLCB5b3UgZGlkIGl0ITwvaDI+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQge1xuXHRzd2l0Y2gxTnVtOiBudW1iZXI7XG5cdHN3aXRjaDJOdW06IG51bWJlcjtcblx0c3dpdGNoM051bTogbnVtYmVyO1xuXHRzd2l0Y2g0TnVtOiBudW1iZXI7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
