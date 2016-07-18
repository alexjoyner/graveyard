import {Component, Output, EventEmitter} from "angular2/core";
import {TagsService} from "../../../ts/shared/net-services/tags.service";
import {FavoritesService} from "../../../ts/shared/net-services/favorites.service";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
declare function require(name:string);
@Component({
    'selector': 'favorites-cell',
    'template': require('dev/components/shared/favorites-cell/favorites-cell.tpl.html'),
    providers: [TagsService, FavoritesService]
})

export class FavoritesCellComponent{
    @Output() getQuestionSet = new EventEmitter();
    private editMode:boolean = false;
    private returnedTags:any[];
    private favorites:any;

    constructor(private _tagsService:TagsService,
                private _favoritesService:FavoritesService,
                private _authService:AuthService) {
        if (_authService.checkTokenExists()) {
            _favoritesService.getFavorites().subscribe(
                data => this.favorites = data
            )
        }
    }
    getQuestionsByTag(tagId: number){
        this.getQuestionSet.emit(tagId);
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    addFavorite(tag_id:number, index:number) {
        this._favoritesService.addFavorite(tag_id).subscribe(
            data => {
                this.favorites.push({'_id': tag_id, 'tag_name': this.returnedTags[index].tag_name});
                this.returnedTags.splice(index, 1);
            });
    }
    removeFavorite(tag_id:number, index:number) {
        this._favoritesService.unFavorite(tag_id).subscribe(
            data => {
                this.favorites.splice(index, 1);
            });
    }
    searchTags(searchTerm:string) {
        this._tagsService.getTags(searchTerm, 1)
            .subscribe(
                data => {
                    this.returnedTags = data;
                },
                err => console.log('Error: ', err)
            );
    }
}