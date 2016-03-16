System.register(['angular2/core', '../mock/mock-issues', '../mock/mock-points', '../mock/mock-supports'], function(exports_1, context_1) {
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
    var core_1, mock_issues_1, mock_points_1, mock_supports_1;
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
            },
            function (mock_supports_1_1) {
                mock_supports_1 = mock_supports_1_1;
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
                    else if (srcType === 'support') {
                        for (var i = mock_supports_1.SUPPORTS.length - 1; i >= 0; i--) {
                            if (mock_supports_1.SUPPORTS[i]._id === srcId) {
                                if (voteType === 'upvote') {
                                    mock_supports_1.SUPPORTS[i].ups++;
                                }
                                else if (voteType === 'downvote') {
                                    mock_supports_1.SUPPORTS[i].downs++;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQW9EQSxDQUFDO2dCQW5EQSxRQUFRO2dCQUNSLGlDQUFPLEdBQVAsVUFDQyxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWdCO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM3QyxFQUFFLENBQUMsQ0FBQyxvQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUM3QixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQ0FDM0Isb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FDakIsQ0FBQztnQ0FBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0NBQzdCLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0NBQ25CLENBQUM7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO2dDQUNsQyxDQUFDOzRCQUNGLENBQUM7d0JBQ0YsQ0FBQztvQkFDRixDQUFDO29CQUFBLElBQUksQ0FDTCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDN0MsRUFBRSxDQUFDLENBQUMsb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0NBQzNCLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQ2pCLENBQUM7Z0NBQUMsSUFBSSxDQUNMLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29DQUM3QixvQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUNuQixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtnQ0FDbEMsQ0FBQzs0QkFDSCxDQUFDO3dCQUNGLENBQUM7b0JBQ0YsQ0FBQztvQkFBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLHdCQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQy9DLEVBQUUsQ0FBQyxDQUFDLHdCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29DQUMzQix3QkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dDQUNuQixDQUFDO2dDQUFDLElBQUksQ0FDTCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQ0FDN0Isd0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQ0FDckIsQ0FBQztnQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0NBQ2xDLENBQUM7NEJBQ0gsQ0FBQzt3QkFDRixDQUFDO29CQUNGLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUNyQyxDQUFDO2dCQUNGLENBQUM7Z0JBcERGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXFEYixzQkFBQztZQUFELENBcERBLEFBb0RDLElBQUE7WUFwREQsNkNBb0RDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SVNTVUVTfSBmcm9tICcuLi9tb2NrL21vY2staXNzdWVzJztcbmltcG9ydCB7UE9JTlRTfSBmcm9tICcuLi9tb2NrL21vY2stcG9pbnRzJztcbmltcG9ydCB7U1VQUE9SVFN9IGZyb20gJy4uL21vY2svbW9jay1zdXBwb3J0cyc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxTZXJ2aWNlIHtcblx0LypQT1NUKi9cblx0YWRkVm90ZShcblx0XHRzcmNUeXBlOiBzdHJpbmcsIFxuXHRcdHNyY0lkOiBzdHJpbmcsIFxuXHRcdHZvdGVUeXBlOiBzdHJpbmcpe1xuXHRcdGNvbnNvbGUubG9nKHNyY1R5cGUsIHNyY0lkLCB2b3RlVHlwZSk7XG5cdFx0aWYoc3JjVHlwZSA9PT0gJ2lzc3VlJyl7XG5cdFx0XHRmb3IgKHZhciBpID0gSVNTVUVTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChJU1NVRVNbaV0uX2lkID09PSBzcmNJZCkge1xuXHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ3Vwdm90ZScpIHtcblx0XHRcdFx0XHRcdElTU1VFU1tpXS51cHMrKztcblx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRpZiAodm90ZVR5cGUgPT09ICdkb3dudm90ZScpIHtcblx0XHRcdFx0XHRcdElTU1VFU1tpXS5kb3ducysrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnTm8gdHlwZSByZWNvZ25pemVkJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ZWxzZVxuXHRcdGlmIChzcmNUeXBlID09PSAncG9pbnQnKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChQT0lOVFNbaV0uX2lkID09PSBzcmNJZCkge1xuXHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ3Vwdm90ZScpIHtcblx0XHRcdFx0XHRcdFBPSU5UU1tpXS51cHMrKztcblx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdGlmICh2b3RlVHlwZSA9PT0gJ2Rvd252b3RlJykge1xuXHRcdFx0XHRcdFx0XHRQT0lOVFNbaV0uZG93bnMrKztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdObyB0eXBlIHJlY29nbml6ZWQnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlXG5cdFx0aWYgKHNyY1R5cGUgPT09ICdzdXBwb3J0Jykge1xuXHRcdFx0Zm9yICh2YXIgaSA9IFNVUFBPUlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGlmIChTVVBQT1JUU1tpXS5faWQgPT09IHNyY0lkKSB7XG5cdFx0XHRcdFx0aWYgKHZvdGVUeXBlID09PSAndXB2b3RlJykge1xuXHRcdFx0XHRcdFx0U1VQUE9SVFNbaV0udXBzKys7XG5cdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRpZiAodm90ZVR5cGUgPT09ICdkb3dudm90ZScpIHtcblx0XHRcdFx0XHRcdFx0U1VQUE9SVFNbaV0uZG93bnMrKztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdObyB0eXBlIHJlY29nbml6ZWQnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzb3VyY2UgdHlwZSBmb3VuZCcpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
