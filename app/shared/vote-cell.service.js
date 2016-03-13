System.register(['angular2/core', '../mock/mock-issues', '../mock/mock-points'], function(exports_1, context_1) {
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
    var core_1, mock_issues_1, mock_points_1;
    var VoteCellService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_issues_1_1) {
                mock_issues_1 = mock_issues_1_1;
            },
            function (mock_points_1_1) {
                mock_points_1 = mock_points_1_1;
            }],
        execute: function() {
            VoteCellService = (function () {
                function VoteCellService() {
                }
                /*POST*/
                VoteCellService.prototype.addVote = function (srcType, srcId, voteType) {
                    console.log(srcType, srcId, voteType);
                    if (srcType === 'issue') {
                        for (var i = mock_issues_1.ISSUES.length - 1; i >= 0; i--) {
                            if (mock_issues_1.ISSUES[i]._id === srcId) {
                                if (voteType === 'upvote') {
                                    mock_issues_1.ISSUES[i].ups++;
                                }
                                else if (voteType === 'downvote') {
                                    mock_issues_1.ISSUES[i].downs++;
                                }
                                else {
                                    console.log('No type recognized');
                                }
                            }
                        }
                    }
                    else if (srcType === 'point') {
                        for (var i = mock_points_1.POINTS.length - 1; i >= 0; i--) {
                            if (mock_points_1.POINTS[i]._id === srcId) {
                                if (voteType === 'upvote') {
                                    mock_points_1.POINTS[i].ups++;
                                }
                                else if (voteType === 'downvote') {
                                    mock_points_1.POINTS[i].downs++;
                                }
                                else {
                                    console.log('No type recognized');
                                }
                            }
                        }
                    }
                    else {
                        console.log('No source type found');
                    }
                };
                VoteCellService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VoteCellService);
                return VoteCellService;
            }());
            exports_1("VoteCellService", VoteCellService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQXNDQSxDQUFDO2dCQXJDQSxRQUFRO2dCQUNSLGlDQUFPLEdBQVAsVUFDQyxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWdCO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM3QyxFQUFFLENBQUMsQ0FBQyxvQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUM3QixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQ0FDM0Isb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FDakIsQ0FBQztnQ0FBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0NBQzdCLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0NBQ25CLENBQUM7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dDQUNsQyxDQUFDOzRCQUNGLENBQUM7d0JBQ0YsQ0FBQztvQkFDRixDQUFDO29CQUFBLElBQUksQ0FDTCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDN0MsRUFBRSxDQUFDLENBQUMsb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0NBQzNCLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQ2pCLENBQUM7Z0NBQUMsSUFBSSxDQUNMLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29DQUM3QixvQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUNuQixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQ0FDbEMsQ0FBQzs0QkFDSCxDQUFDO3dCQUNGLENBQUM7b0JBQ0YsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3JDLENBQUM7Z0JBQ0YsQ0FBQztnQkF0Q0Y7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBdUNiLHNCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCw2Q0FzQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdm90ZS1jZWxsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJU1NVRVN9IGZyb20gJy4uL21vY2svbW9jay1pc3N1ZXMnO1xuaW1wb3J0IHtQT0lOVFN9IGZyb20gJy4uL21vY2svbW9jay1wb2ludHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxTZXJ2aWNlIHtcblx0LypQT1NUKi9cblx0YWRkVm90ZShcblx0XHRzcmNUeXBlOiBzdHJpbmcsIFxuXHRcdHNyY0lkOiBzdHJpbmcsIFxuXHRcdHZvdGVUeXBlOiBzdHJpbmcpe1xuXHRcdGNvbnNvbGUubG9nKHNyY1R5cGUsIHNyY0lkLCB2b3RlVHlwZSk7XG5cdFx0aWYoc3JjVHlwZSA9PT0gJ2lzc3VlJyl7XG5cdFx0XHRmb3IgKHZhciBpID0gSVNTVUVTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChJU1NVRVNbaV0uX2lkID09PSBzcmNJZCkge1xuXHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ3Vwdm90ZScpIHtcblx0XHRcdFx0XHRcdElTU1VFU1tpXS51cHMrKztcblx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRpZiAodm90ZVR5cGUgPT09ICdkb3dudm90ZScpIHtcblx0XHRcdFx0XHRcdElTU1VFU1tpXS5kb3ducysrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnTm8gdHlwZSByZWNvZ25pemVkJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ZWxzZVxuXHRcdGlmIChzcmNUeXBlID09PSAncG9pbnQnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChQT0lOVFNbaV0uX2lkID09PSBzcmNJZCkge1xuXHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ3Vwdm90ZScpIHtcblx0XHRcdFx0XHRcdFBPSU5UU1tpXS51cHMrKztcblx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ2Rvd252b3RlJykge1xuXHRcdFx0XHRcdFx0XHRQT0lOVFNbaV0uZG93bnMrKztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdObyB0eXBlIHJlY29nbml6ZWQnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzb3VyY2UgdHlwZSBmb3VuZCcpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
