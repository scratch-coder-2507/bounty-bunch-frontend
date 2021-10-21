import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { CreateBannersComponent } from '../components/banners/create-banners/create-banners.component';
import { ListBannersComponent } from '../components/banners/list-banners/list-banners.component';
import { BotCreationComponent } from '../components/bots/bot-creation/bot-creation.component';
import { BotListComponent } from '../components/bots/bot-list/bot-list.component';
import { EditGameCategoryComponent } from '../components/game-category/edit-game-category/edit-game-category.component';
import { GameCategoryCreationComponent } from '../components/game-category/game-category-creation/game-category-creation.component';
import { GameCategoryListComponent } from '../components/game-category/game-category-list/game-category-list.component';
import { EditGameListComponent } from '../components/game-list/edit-game-list/edit-game-list.component';
import { GameListCreationComponent } from '../components/game-list/game-list-creation/game-list-creation.component';
import { GameListViewComponent } from '../components/game-list/game-list-view/game-list-view.component';
import { EditSubAdminComponent } from '../components/sub-admins/edit-sub-admin/edit-sub-admin.component';
import { SubAdminCreationComponent } from '../components/sub-admins/sub-admin-creation/sub-admin-creation.component';
import { SubAdminListComponent } from '../components/sub-admins/sub-admin-list/sub-admin-list.component';
import { TournmentCreationComponent } from '../components/tournments/tournment-creation/tournment-creation.component';
import { TournmentListComponent } from '../components/tournments/tournment-list/tournment-list.component';
import { UserManagementComponent } from '../components/users/user-management/user-management.component';
import { HeaderComponent } from './header.component';

const routes: Routes = [
    {
        path: '', component: HeaderComponent,
        children: [
            { path: '', component: AnalyticsComponent },
            {
                path: 'sub-admin-creation', component: SubAdminCreationComponent
            },
            {
                path: 'sub-admin-list', component: SubAdminListComponent
            },
            {
                path: 'edit-sub-admin/:id', component:EditSubAdminComponent
            },
            {
                path: 'game-category-creation', component: GameCategoryCreationComponent
            },
            {
                path: 'game-category-list', component: GameCategoryListComponent
            },
            {
                path: 'edit-game-category/:id', component:EditGameCategoryComponent
            },
            {
                path: 'game-list-creation', component: GameListCreationComponent
            },
            {
                path: 'game-list-view', component: GameListViewComponent
            },
            {
                path: 'edit-game-list/:id', component:EditGameListComponent
            },
            {
                path: 'bot-creation', component: BotCreationComponent
            },
            {
                path: 'bot-list', component: BotListComponent
            },
            {
                path: 'tournment-creation/:id', component: TournmentCreationComponent
            },
            {
                path: 'tournment-list/:id', component: TournmentListComponent
            },
            {
                path: 'user-management', component: UserManagementComponent
            },
            {
                path: 'create-banner', component: CreateBannersComponent
            },
            {
                path: 'banner-list', component:ListBannersComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HeaderRoutingModule {

}