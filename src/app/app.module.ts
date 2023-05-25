import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConsumerComponent } from './consumer/consumer.component';
import { CreateAclGroupComponent } from './create-acl-group/create-acl-group.component';
import { CreateApiKeyComponent } from './create-api-key/create-api-key.component';
import { CreateBasicComponent } from './create-basic/create-basic.component';
import { CreateConsumerComponent } from './create-consumer/create-consumer.component';
import { CreateHmacAuthComponent } from './create-hmac-auth/create-hmac-auth.component';
import { CreateOauthComponent } from './create-oauth/create-oauth.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    CreateConsumerComponent,
    CreateApiKeyComponent,
    CreateBasicComponent,
    CreateHmacAuthComponent,
    CreateOauthComponent,

    CreateAclGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
