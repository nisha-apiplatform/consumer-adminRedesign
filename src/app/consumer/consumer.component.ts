import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { CreateAclGroupComponent } from '../create-acl-group/create-acl-group.component';
import { CreateApiKeyComponent } from '../create-api-key/create-api-key.component';
import { CreateBasicComponent } from '../create-basic/create-basic.component';
import { CreateConsumerComponent } from '../create-consumer/create-consumer.component';
import { CreateHmacAuthComponent } from '../create-hmac-auth/create-hmac-auth.component';
import { CreateOauthComponent } from '../create-oauth/create-oauth.component';
import { MatTableDataSource } from '@angular/material/table';
import { users } from './users';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss'],
})
export class ConsumerComponent {
  searchTerm = '';

  constructor(private dialog: MatDialog) {
    this.dataSource.data = this.getUserData(this.selectedUser);
    this.dataBasic = users[this.selectedUser][0].Basic.map((basic: any) => {
      return {
        username: basic.username,
        password: basic.password,
        created: basic.created,
      };
    });
    this.dataHMAC = users[this.selectedUser][0].HMAC.map((hmac: any) => {
      return {
        username: hmac.username,
        secret: hmac.secret,
        created: hmac.created,
      };
    });
    this.dataAPIKey = users[this.selectedUser][0].APIKey.map((apiKey: any) => {
      return {
        key: apiKey.key,
        created: apiKey.created,
      };
    });

    this.dataOAuth = users[this.selectedUser][0].OAuth.map((oAuth: any) => {
      return {
        name: oAuth.name,
        clientId: oAuth.clientId,
        redirectUrls: oAuth.redirectUrls,
        created: oAuth.created,
      };
    });
  }

  // constructor(public dialog: MatDialog) {}

  dataAPIKey = Object.keys(users)
    .map((userKey) => {
      return users[userKey][0].APIKey.map((apiKey: any) => {
        return {
          key: apiKey.key,
          created: apiKey.created,
        };
      });
    })
    .flat();

  dataBasic = Object.keys(users)
    .map((userKey) => {
      return users[userKey][0].Basic.map((basic: any) => {
        return {
          name: basic.name,
          clientId: basic.clientId,
          redirectUrls: basic.redirectUrls,
          created: basic.created,
        };
      });
    })
    .flat();

  dataHMAC = Object.keys(users)
    .map((userKey) => {
      return users[userKey][0].HMAC.map((hmac: any) => {
        return {
          username: hmac.name,
          secret: hmac.secret,
          created: hmac.created,
        };
      });
    })
    .flat();

  dataOAuth = Object.keys(users)
    .map((userKey) => {
      return users[userKey][0].OAuth.map((oAuth: any) => {
        return {
          name: oAuth.name,
          clientId: oAuth.clientId,
          redirectUrls: oAuth.redirectUrls,
          created: oAuth.created,
        };
      });
    })
    .flat();

  filteredUsers: any[] = Object.keys(users);

  selectedUser: string = 'user_1';

  onUserSelected(userKey: any) {
    this.selectedUser = userKey;

    this.dataBasic = users[userKey][0].Basic.map((basic: any) => {
      return {
        username: basic.username,
        password: basic.password,
        created: basic.created,
      };
    });
    this.dataHMAC = users[userKey][0].HMAC.map((hmac: any) => {
      return {
        username: hmac.username,
        secret: hmac.secret,
        created: hmac.created,
      };
    });
    this.dataAPIKey = users[userKey][0].APIKey.map((apiKey: any) => {
      return {
        key: apiKey.key,
        created: apiKey.created,
      };
    });
    this.dataOAuth = users[userKey][0].OAuth.map((oAuth: any) => {
      return {
        name: oAuth.name,
        clientId: oAuth.clientId,
        redirectUrls: oAuth.redirectUrls,
        created: oAuth.created,
      };
    });
  }

  searchItems() {
    this.filteredUsers = Object.keys(users).filter((user) =>
      user.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getUserData(userKey: string): any[] {
    if (userKey) {
      return users[userKey];
    } else {
      return [];
    }
  }

  dataSource = new MatTableDataSource<any>(this.getUserData(this.selectedUser));

  createConsumerDialog(): void {
    const dialogRef = this.dialog.open(CreateConsumerComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        //TODO: add logic
        console.log(result);
      }
    });
  }
  deleteUser(item: any) {
    delete users[item];
    this.filteredUsers = Object.keys(users).filter(
      (key: any) =>
        key.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
    );

    this.dataSource.data = this.getUserData(this.selectedUser);
  }

  createApiKeyDialog(): void {
    const dialogRef = this.dialog.open(CreateApiKeyComponent, {
      width: '500px',
      data: { key: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result['created'] = new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        console.log(result);
        users[this.selectedUser][0].APIKey.push(result);
        this.updateTableData();
      }
    });
  }

  createBasicDialog(): void {
    const dialogRef = this.dialog.open(CreateBasicComponent, {
      width: '500px',
      data: { username: '', password: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result['created'] = new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
        console.log(result);

        users[this.selectedUser][0].Basic.push(result);
        this.updateTableData();
      }
    });
  }

  deleterow(row: any): void {
    const user = users[this.selectedUser][0];
    const index = user.Basic.indexOf(row);
    if (index !== -1) {
      user.Basic.splice(index, 1);
      this.dataSource.data = this.getUserData(this.selectedUser);
      this.dataSource._updateChangeSubscription();
    }
  }

  createHmacDialog(): void {
    const dialogRef = this.dialog.open(CreateHmacAuthComponent, {
      width: '500px',
      data: { username: '', secret: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result['created'] = new Date().toISOString().slice(0, 10);

        console.log(result);
        users[this.selectedUser][0].HMAC.push(result);

        this.updateTableData();
      }
    });
  }

  createOAuthDialog(): void {
    const dialogRef = this.dialog.open(CreateOauthComponent, {
      width: '500px',
      data: { name: '', clientId: '', redirectUrls: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result['created'] = new Date().toISOString().slice(0, 10);
        users[this.selectedUser][0].OAuth.push(result);
        this.updateTableData();
      }
    });
  }

  displayedColumns = {
    displayedColumnsAPIKey: ['key', 'created'],
    displayedColumnsBasic: ['username', 'password', 'created', 'action'],
    displayedColumnsHMAC: ['username', 'secret', 'created', 'action'],
    displayedColumnsOAuth: [
      'name',
      'clientID',
      'redirectURLs',
      'created',
      'action',
    ],
  };
  grids = [
    { groupName: 'Group 1 ' },
    { groupName: 'Group 2' },
    { groupName: 'Group 2' },
    { groupName: 'Group 3' },
    { groupName: 'Group 5' },
    { groupName: 'Group 8' },
    { groupName: 'Group 12' },
  ];

  addNewGrid(): void {
    const dialogRef = this.dialog.open(CreateAclGroupComponent, {
      width: '250px',
      data: { groupName: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.grids.push(result);
      }
    });
  }
  removeGrid(index: number): void {
    this.grids.splice(index, 1);
  }
  updateTableData() {
    this.dataSource.data = this.getUserData(this.selectedUser);
    this.dataBasic = users[this.selectedUser][0].Basic.map((basic: any) => {
      return {
        username: basic.username,
        password: basic.password,
        created: basic.created,
      };
    });
    this.dataHMAC = users[this.selectedUser][0].HMAC.map((hmac: any) => {
      return {
        username: hmac.username,
        secret: hmac.secret,
        created: hmac.created,
      };
    });
    this.dataAPIKey = users[this.selectedUser][0].APIKey.map((apiKey: any) => {
      return {
        key: apiKey.key,
        created: apiKey.created,
      };
    });

    this.dataOAuth = users[this.selectedUser][0].OAuth.map((oAuth: any) => {
      return {
        name: oAuth.name,
        clientId: oAuth.clientId,
        redirectUrls: oAuth.redirectUrls,
        created: oAuth.created,
      };
    });
  }
}
