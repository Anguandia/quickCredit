// loan application page
document.write(
`<div id="main">\
<h1 id='username'>Anguandia Mike</h1><hr>\
<div id="main_main">\
<input type="text" name="loan" class="searchbox" onkeyup="filterData(1)"\
placeholder="enter loan id to search">\
<tab class="search"><a href="detail.html${window.location.search}">Select</a></tab>\
<div id="controls">\
  <label class='user hidden'>Sort by:
  <select onchange='selectSort(event)'>\
  <option>--select--</option>\
  <option>Name</option>\
  <option>Loan id</option>\
  <option>Status</option>\
  </select>\
</label>
<label class='admin hidden'>Search for:
  <select onchange='selectSearch(event)'>\
  <option>--select--</option>\
  <option>User by Id</option>\
  <option>User by Name</option>\
  <option>Loan by Id</option>\
  <option>Loan by Name</option>\
  <option>Loan by Status</option>\
  </select>\
  </label>
</div><hr>\
<ul class="list">\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Anguandia Mike</span>\
  <span>18050630007</span></a>\
  <span>$30000</span>\
  <span class='lightgreen'>Draft</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Benjamin Franklin</span>\
  <span>18070230301</span></a>\
  <span>$75000</span>\
  <span class='green'>Completed</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Isaac Asimov</span>\
  <span>18070630001</span></a>\
  <span>$91000</span>\
  <span class='red'>Rejected</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Fadil Rajab</span>\
  <span>18070630001</span></a>\
  <span>$55000</span>\
  <span class='lightgreen'>Draft</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Peter Simon</span>\
  <span>18070630001</span></a>\
  <span>$850000</span>\
  <span class='green'>Completed</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Famin Pierr</span>\
  <span>10070630001</span></a>\
  <span>$58000</span>\
  <span class='green'>Completed</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Clera Serah</span>\
  <span>12120630001</span></a>\
  <span>$110000</span>\
  <span class='red'>Rejected</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Zadoch Simon</span>\
  <span>0807063000</span></a>\
  <span>$18000</span>\
  <span class='red'>Rejected</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Os pa mali</span>\
  <span>15070630301</span></a>\
  <span>$32000</span>\
  <span class='navy'>Current</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Bonny Musa</span>\
  <span>17070630001</span></a>\
  <span>$2400</span>\
  <span class='red'>Rejected</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Tolea Ofin</span>\
  <span>18070630001</span></a>\
  <span>$55500</span>\
  <span class='red'>Rejected</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Karim Peter</span>\
  <span>18070230301</span></a>\
  <span>$19000</span>\
  <span class='yellow'>Overdue</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Boran Siraj</span>\
  <span>18070630001</span></a>\
  <span>$9900</span>\
  <span class='lightblue'>Verified</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Fiona Paul</span>\
  <span>18070630001</span></a>\
  <span>$660000</span>\
  <span class='lightblue'>Verified</span>\
</li>\
<li>\
  <input type='checkbox'></input>\
  <a href='detail.html${window.location.search}'><span class='name'>Douglas Marie</span>\
  <span>18070630001</span></a>\
  <span>$2100</span>\
  <span class='aliceblue'>Approved</span>\
</li>\
</ul>\
</div>\
<script src='static/scripts/user.js'></script>\
</div>\
`);
