import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BotCreationComponent } from "../components/bots/bot-creation/bot-creation.component";
import { BotListComponent } from "../components/bots/bot-list/bot-list.component";
import { GameCategoryCreationComponent } from "../components/game-category/game-category-creation/game-category-creation.component";
import { GameCategoryListComponent } from "../components/game-category/game-category-list/game-category-list.component";
import { GameListCreationComponent } from "../components/game-list/game-list-creation/game-list-creation.component";
import { GameListViewComponent } from "../components/game-list/game-list-view/game-list-view.component";
import { SubAdminCreationComponent } from "../components/sub-admins/sub-admin-creation/sub-admin-creation.component";
import { SubAdminListComponent } from "../components/sub-admins/sub-admin-list/sub-admin-list.component";
import { TournmentCreationComponent } from "../components/tournments/tournment-creation/tournment-creation.component";
import { TournmentListComponent } from "../components/tournments/tournment-list/tournment-list.component";
import { UserManagementComponent } from "../components/users/user-management/user-management.component";
import { HeaderRoutingModule } from "./header-routing.module";
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { EditSubAdminComponent } from "../components/sub-admins/edit-sub-admin/edit-sub-admin.component";
import { CreateBannersComponent } from "../components/banners/create-banners/create-banners.component";
import { ListBannersComponent } from "../components/banners/list-banners/list-banners.component";
import { EditGameListComponent } from "../components/game-list/edit-game-list/edit-game-list.component";
import { EditGameCategoryComponent } from "../components/game-category/edit-game-category/edit-game-category.component";


@NgModule({
    declarations: [SubAdminCreationComponent, SubAdminListComponent,
        GameCategoryCreationComponent,
        GameCategoryListComponent,
        GameListCreationComponent,
        GameListViewComponent,
        BotCreationComponent,
        BotListComponent,
        TournmentCreationComponent,
        TournmentListComponent,
        UserManagementComponent,
        EditSubAdminComponent,
        CreateBannersComponent,
        ListBannersComponent,
        EditGameListComponent,
        EditGameCategoryComponent
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        MatDialogModule
    ]
})

export class HeaderModule {

}