import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionAboutComponent } from './components/cards/section-about/section-about.component';
import { SectionWorksComponent } from './components/cards/section-works/section-works.component';
import { SmallCardsComponent } from './components/cards/small-cards/small-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageRegistroComponent } from './pages/page-registro/page-registro.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { InputValidationComponent } from './components/form/input-validation/input-validation.component';
import { TextInputComponent } from './components/form/text-input/text-input.component';
import { InputGroupComponent } from './components/form/input-group/input-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SectionAboutComponent,
    SectionWorksComponent,
    SmallCardsComponent,
    FooterComponent,
    PageRegistroComponent,
    PageLoginComponent,
    InputGroupComponent,
    InputValidationComponent,
    TextInputComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
