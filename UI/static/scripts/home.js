// loan application page
document.write(
    `<div id="main">\
    <h1 id='username'>Admin Mike</h1><hr>\
    <div id="main_main">\
    <h3 class='home'>Anguandia-Personal Dashboard</h3><hr>\
    <button class='dashboard _lightgreen navy' id='Draft' oclick='loadSelection("Draft"," Active Loan - Anguandia Mike", "?u_loan_180524=View_loan")'><p><a href=detail.html?u_loan_180524=view_loan style='text-decoration:none; color:navy'>*Current loan<span>26% Paid</span></a></p></button>\
    <button class='dashboard _green white' id='Completed' onclick='loadSelection("Completed", "","?u_loan_180524=view_loan")'><p>Completed<span>10</span></p></button>\
    </div>\
    <script src='static/scripts/user.js'></script>\
    </div>\
    `);
