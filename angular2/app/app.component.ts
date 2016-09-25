import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div class="all">
		<div class="header">
			<div class="label">Key/Value Pair</div>
			<div class="row">
				<div class="left-area"><input id="kv-input" type="text"/></div>
				<div class="right-area"><button id="add-button">Add</button></div>
			</div>
			<div class="row" id="message"></div>
		</div>
		<hr>
		<div class="body">
			<div class="row label">Key/Value Pair List</div>
			<div class="row">
				<div class="left-area">
					<select id="kv-list" size="10"></select>
					<textarea readOnly id="kv-xml"></textarea>
				</div>
				<div class="right-area">
					<div class="row"><button id="order-value-button">OrderByValue</button></div>
					<div class="row"><button id="order-key-button">OrderByKey</button></div>
					<div class="row"><button id="delete-button">Delete</button></div>
					<div class="row"><button id="show-xml">ShowXML</button></div>
					<div class="row"><button id="show-list">ShowList</button></div>
					<div class="row"><button id="load-json">LoadData</button></div>
					<div class="row"><button id="save-json">SaveData</button></div>
				</div>
			</div>
		</div>
	</div>
  `
})
export class AppComponent { }
