/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* show elements relevant to particular page from general html
take in an array of parent elements(parents) some of whose
children are to be displayed for specific pages if any of their classes is/are in the
array of required classes */
function showPage(required, parents, funct = null) {
  // add class universal to any required class's array
  required.push('universal');
  parents.forEach((parent) => {
    const cont = document.getElementById(parent);
    const elements = cont.querySelectorAll('*');
    cont.style.display = 'block';
    elements.forEach((member) => {
      // get an array of classnames of each child element
      const element = member;
      if (element.hasAttribute('class')) {
        const classes = element.getAttribute('class');
        // check if atleast a class name of current element is aamong the classes
        // required for display
        if (classes.split(' ').filter(value => required.includes(value)).length > 0) {
          // keep menu expansion icon hidden on largescreens
          if (element.getAttribute('id') !== 'options') {
            // display elements in each block as desired
            if (parent === 'auth') {
              element.style.display = 'inline';
            } else if (parent === 'menu') {
              element.style.display = 'block';
              // include signup/in form loading
            } else if (element.tagName === 'LABEL' && element.childElementCount > 1) {
              element.style.display = 'initial';
            } else {
              element.style.display = '';
            }
          }
        } else {
          element.style.display = 'none';
        }
      }
    });
  });
  // eslint-disable-next-line no-unused-expressions
  funct;
}

/* slide in and out menu pane to expand, overlapping main content
on smaller screens */
const menu = document.getElementById('menu');
const icon = document.getElementById('iconcontainer');
function openMenu() {
  // only expand on screens smaller than 420px width
  if (window.innerWidth < 620) {
    if (window.innerWidth > window.innerHeight) {
      menu.style.width = '50%';
    } else {
      menu.style.height = 'inherit';
      document.getElementById('options').style.display = 'none';
    }
  }
}

// slide out menu pane
function closeMenu() {
  if (window.innerWidth < 620 && window.innerWidth > 240) {
    if (window.innerWidth > window.innerHeight) {
      menu.style.width = '10%';
    } else {
      menu.style.height = '30%';
      document.getElementById('options').style.display = 'block';
    }
  }
}

// togle display of menu on click of icon
function showMenu() {
  menu.style.width = '100%';
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
    openMenu();
  }
}

menu.onmouseover = openMenu;
menu.onmouseout = closeMenu;
icon.onclick = showMenu;

// sort lists(loans/users)
function sortData(j) {
  // list = document.getElementById("all_loans");
  const list = document.querySelector('.list');
  let swap = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (swap) {
    // start by saying: no switching is done:
    swap = false;
    const items = list.children;
    // Loop through all list items
    for (let i = 0; i < (items.length - 1); i++) {
      // start by saying there should be no switching:
      let needSwap = false;
      /* Get the two elements you want to compare,
            one from current row and one from the next: */
      const current = items[i].getElementsByTagName('span')[j];
      const next = items[i + 1].getElementsByTagName('span')[j];
      // highlight sorted constiable
      current.style.background = 'aliceblue';
      // include the last row for highlighting
      next.style.background = 'aliceblue';
      // check if the two items should switch place eliminate case differences by using lowercase all through:
      if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
        // if so, mark as a switch and break the loop:
        needSwap = true;
        break;
      }
    }
    if (needSwap) {
      /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
      items[i].parentNode.insertBefore(items[i + 1], items[i]);
      swap = true;
    }
  }
}

// monitor status of sort parameter to trigger approprate sort
function selectSort(change) {
  if (change.target.value === 'Name') {
    sortData(0);
  } else if (change.target.value == 'Loan id') {
    sortData(1);
  } else if (change.target.value == 'Status') {
    sortData(3);
  } else {
    sortData(1);
  }
}

// search loans/users by id
function filterData(j, filter) {
  // check if search keyword(filter) not provided in call
  if (!filter) {
    const input = document.querySelector('.searchbox');
    // then get search key from search input
    const filter = input.value;
  }
  const list = document.querySelector('.list');
  const items = list.children;
  // iterate throught each list item to locate search field
  for (let i = 0; i < items.length; i++) {
    // get search field
    const field = items[i].getElementsByTagName('span')[j];
    // leave item display as is if current input value in search field
    if (field.innerHTML.indexOf(filter) > -1) {
      items[i].style.display = '';
    } else {
      // do not show item if input value not in search field
      items[i].style.display = 'none';
    }
  }
}

// load category of items in a diven admin ashboard tab
// function takes in the filter key from the status span id, intentionally named after the status  target status
function loadSelection(key, name, query) {
  // check if HTMLHeadingElement(page name) not provided in calling function
  if (!name) {
    // get and save current admin profile page heading in local storage to be retrieved for reconstitution after redirect
    name = document.getElementById('main').firstElementChild.textContent;
  }
  if (query) {
    window.location.href = `client.html${query}`;
  } else {
    // recirect to appropriate raw list page; loans or users
    window.location.href = 'users.html?a_';
  }
  localStorage.setItem('name', name);
  // save the search key from the button id passed in function call as an argument
  localStorage.setItem('key', key);
  // we'll be seacrching by status value for loans, the 4th child element of each loans list item, save that to local storage too
  localStorage.setItem('j', 3);
}

// function to display feedback
function approve(resp, bg = 'green', color = 'white') {
  const msg = document.getElementById('msg');
  msg.innerHTML = resp;
  msg.style.display = 'block';
  msg.style.color = color;
  msg.style.background = bg;
  setTimeout(() => {
    msg.style.display = 'none';
  }, 3000);
}

// display and hide the signout dialogue box on clicking signout/cancel
function signout() {
  document.querySelector('#signoutt').style.display = 'block';
}
function cancel() {
  document.querySelector('#signoutt').style.display = 'none';
}

// clear current user and redirect to index page on signuot
function reset() {
  localStorage.clear();
  window.location.href = 'index.html';
}

// add residence and permanent address input fields
const add = document.getElementById('extra');
add.addEventListener('click', () => {
  document.querySelectorAll('.extra').forEach(elt => (elt.style.display == 'none' ? elt.style.display = 'inline' : elt.style.display = 'none'));
});

/* check password and repeat password fields are identical in value */
function checkRepeat() {
  const password = document.getElementById('password');
  const repeat = document.getElementById('confirm_password');
  if (repeat.value[repeat.value.length - 1] != password.value[repeat.value.length - 1]) {
    document.getElementById('repeat_error').style.display = 'initial';
    document.getElementById('repeat_error').textContent = 'The passwords do not match!';
  } else {
    document.getElementById('repeat_error').style.display = 'none';
  }
}

// passwordviewer
const withEye = document.getElementsByTagName('form');

// display password view eye
function disp(elt) {
  const sh = elt.children[1];
  sh.style.display = 'block';
}

// toggle password display between visible and encrypted
function see(elt) {
  const parent = elt.previousElementSibling;
  const field = parent.children[1];
  (field.getAttribute('type') == 'password') ? field.setAttribute('type', 'text') : field.setAttribute('type', 'password');
}

// create and diplay tooltip on focus for 5s
// function takes in the element to show the tooltip for and the message to display
// the x and y coordinates determine the positioning of the message
function showTip(elt, msg, x = '100%', y = '0%') {
  const tip = document.createElement('span');
  tip.setAttribute('id', 'tip');
  tip.style.visibility = 'visible';
  tip.style.right = x;
  tip.style.top = y;
  const ms = document.createTextNode(msg);
  tip.appendChild(ms);
  elt.appendChild(tip);
  setTimeout(() => {
    tip.style.visibility = 'hidden';
  }, 3000);
}

// show user password change and profile picture upload forms
function showForm(id) {
  const buttons = document.querySelector('#uzr');
  document.querySelector(`#${id}`).style.display = 'block';
  document.getElementById('usr-controls').style.display = 'none';
}

// helper functions for fetch
function query(e) { return (new URLSearchParams(window.location.search)).get(e); }
function title() { return document.querySelector('h1'); }
function subTitle() { return document.querySelector('h3'); }
function elt(id) { return document.getElementById(id); }
// display IDs to 8 digits padded with leaing zeroes
function padded(num) {
  return num.toString().padStart(8, '0');
}

// construct url for fetch requests
function url(path) {
  const base = 'http://localhost:4000/api/v1/';
  return base + path;
}

// function to extract formdata for post and patch requests
function data(id) {
  return new URLSearchParams(new FormData(document.getElementById(id)));
}

function init(id, method) {
  const initData = {
    method,
    body: id ? data(id) : null,
    headers: new Headers(),
    mode: 'cors',
    redirect: 'follow'
  };
  return initData;
}

async function request(id = '', path = query('path'), method = 'POST') {
  const req = fetch(url(path), init(id, method));
  const resp = await req;
  return resp.json();
}

function showErrors(error) {
  const errors = document.getElementById('repeat_error');
  errors.style.display = 'inline-block';
  error.forEach((err) => {
    const item = document.createElement('li');
    const er = document.createTextNode(err);
    item.appendChild(er);
    errors.appendChild(item);
  });
}

function sign() {
  request('', 'loans', 'GET')
    .then((resp) => {
      const loans = resp.data;
      const newLoans = loans.filter(loan => loan.repaid === false && loan.status === 'pending');
      const pendingCredit = loans.filter(one => one.status === 'approved' && one.balance === 0);
      const rejectedLoans = loans.filter(loan => loan.status === 'rejected');
      const runningLoans = loans.filter(loan => loan.status === 'approved' && loan.balance);
      const completedLoans = loans.filter(loan => loan.repaid === true);
      request('', 'users', 'GET')
        .then((users) => {
          const newUsers = users.data.filter(user => user.status === 'unverified');
          request('authform')
            .then((result) => {
              if ([200, 201].includes(result.status)) {
                const current = loans.filter(loan => loan.repaid === false && loan.email
                    === result.data.email);
                const paid = loans.filter(loan => loan.repaid === true && loan.email
                    === result.data.email);
                document.cookie = `Autnorization=bearer ${result.data.token}`;
                localStorage.setItem('current user', `${result.data.firstname} ${result.data.lastname}`);
                localStorage.setItem('email', result.data.email);
                localStorage.setItem('history', paid.length);
                localStorage.setItem('newUsers', newUsers.length);
                localStorage.setItem('newLoans', newLoans.length);
                localStorage.setItem('pendingCredit', pendingCredit.length);
                localStorage.setItem('runningLoans', runningLoans.length);
                localStorage.setItem('rejectedLoans', rejectedLoans.length);
                localStorage.setItem('completedLoans', completedLoans.length);
                localStorage.setItem('currentLoan', current[0] ? `${current[0].balance * 100 / current[0].amount} % paid` : 'none');
                window.location.href = result.data.isadmin ? 'admin.html' : 'home.html';
                localStorage.setItem('role', result.data.isadmin ? 'admin' : 'client');
              } else if (result.status === 401) {
                showErrors(result.error.split(','));
                elt('rst').style.display = 'block';
              } else if (/exists/.test(result.error)) {
                const action = confirm(`${result.error} signin?`);
                window.location.href = action ? `signin.html?path=auth/signin&${data('authform').toString('authform')}` : '';
                // showErrors();
              } else if (result.status === 404) {
                const action = confirm(`${result.error} signup?`);
                window.location.href = action ? `signup.html?path=auth/signup&${data('authform').toString()}` : '';
              } else {
                showErrors(result.error.split(','));
              }
            });
        });
    })
    .catch(error => ({ error }));
}


function postLoan() {
  request('loanform', 'loans', 'POST')
    .then((res) => {
      if (res.status === 201) {
        window.location.href = `detail.html?path=loans/${res.data.id}`;
      } else if (res.status === 404) {
        const action = confirm(`${res.error}`);
        if (action) {
          window.location.href = `signup.html?path=auth/signup&${data('loanform')}`;
        }
      } else {
        approve(`${res.error}`, 'yellow', 'red');
      }
    })
    .catch(error => ({ error }));
}

// create loan details
function loanDetails(loan) {
  showPage([localStorage.getItem('role') === 'admin' ? 'admin' : 'user'], ['menu', 'auth']);
  const id = document.getElementById('id');
  const type = query('path').slice(0, query('path').indexOf('/') - 1);
  title().textContent = `${type} Record Details`;
  subTitle().innerHTML = `${type}Id <em class='navy'>${padded(loan.id)}</em>`;
  let elts;
  elt('loandetails').style.display = 'block';
  elt('loanid').textContent = padded(loan.id);
  elts = ['client', 'status', 'amount', 'tenor', 'interest', 'paymentinstallment'];
  elt('value').textContent = `${(parseFloat(loan.interest) + 100) * parseFloat(loan.amount) / 100}`;
  elts.forEach((item) => {
    elt(item).textContent = loan[item] || loan.address[item] || loan[0];
    elt(item).setAttribute('class', 'navy');
  });
}

function getLoan(path = query('path')) {
  request('', path, 'GET')
    .then((res) => {
      if (res.status === 200) {
        if (res.data.constructor === Object) {
          loanDetails(res.data, path);
        } else if (res.data.length === 0) {
          showPage([localStorage.getItem('role')], ['auth', 'menu']);
          approve(`no ${path}`);
        } else {
          res.data.forEach((loan) => {
            loanList(loan, path);
          });
        }
      } else {
        approve(res.error, 'yellow', 'red');
      }
    })
    .catch(error => console.log({ error }));
}


// fill loan application form fields with default values; current user's details
function autofill() {
  showPage(['user'], ['auth', 'menu']);
  request('', `users/${localStorage.getItem('email')}`, 'GET')
    .then((res) => {
      const home = document.getElementById('home').querySelectorAll('input');
      const residence = document.getElementById('residence').querySelectorAll('input');
      const work = document.getElementById('work').querySelectorAll('input');
      const address = { home, residence, work };
      const client = res.data;
      document.getElementById('client').value = client.email;
      document.getElementById('fullname').value = `${client.firstname} ${client.lastname}`;
      // Object.entries(address).map((k, v) => console.log(k, '**', v))
      Object.entries(address).map(k => k[1].forEach((i, j) => {
        const p = i;
        p.value = client.address[k[0]].split(',')[j] || '';
      }));
    })
    .catch(error => ({ error }));
}

// calculate payment installment
function installment() {
  const amount = document.getElementById('amount').value;
  const tenor = parseInt(document.getElementById('tenor').value, 10);
  const interest = parseFloat(document.getElementById('interest').value);
  document.getElementById('monthlyInst').value = (amount && tenor) ? (amount * (100 + interest) / (tenor * 100)) : '';
}

// close error display
function closeErrors(e) {
  e.parentNode.style.display = 'none';
}
