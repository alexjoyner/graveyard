'use strict';
angular.module('angular.factory.PostDataFac', [])
    .factory('PostDataFac', [
        function() {
            var PostData = {
                imageData: [],
                items: []
            };
            return {
                saveImageData: function(newImageData) {
                    PostData.imageData.push(newImageData);
                    console.log(PostData.imageData);
                    return PostData.imageData;
                },
                getImageData: function() {
                    return PostData.imageData;
                },
                removeImageData: function(indx) {
                    PostData.imageData.splice(indx, 1);
                    return PostData.imageData;
                },
                setData: function(setNum, data) {
                    switch (setNum) {
                        case 0:
                            PostData.pickup = data;
                            return PostData.pickup;
                        case 1:
                            PostData.dropoff = data;
                            return PostData.dropoff;
                        case 2:
                            PostData.items.push(data);
                            return PostData.items;
                    }
                },
                getAllData: function() {
                    return PostData;
                }
            };
        }
    ]);