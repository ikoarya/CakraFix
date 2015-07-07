function dbConnect(){
     var db = window.openDatabase("MyFriends", "1.0", "myfriends", 200000); 
        db.transaction(populateDB, errorCB, successCB);
    }
  
    //create table and insert some record
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS MyFriends (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Nickname TEXT NOT NULL)');
        tx.executeSql('INSERT INTO MyFriends(Name,Nickname) VALUES ("Sunil Gupta", "android")');
        tx.executeSql('INSERT INTO MyFriends(Name,Nickname) VALUES ("Abhishek Tripathi", "Champoo")');
  tx.executeSql('INSERT INTO MyFriends(Name,Nickname) VALUES ("Sandeep Pal", "kaliya sandy")');
  tx.executeSql('INSERT INTO MyFriends(Name,Nickname) VALUES ("AmitVerma", "Budhiya")');
    }
  
    //function will be called when an error occurred
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }
  
    //function will be called when process succeed
    function successCB() {
        alert("success!");
  var db = window.openDatabase("MyFriends", "1.0", "myfriends", 200000); 
        db.transaction(queryDB,errorCB);
    }
  
    //select all from MyFriends
    function queryDB(tx){
        tx.executeSql('SELECT * FROM MyFriends',[],querySuccess,errorCB);
    }
  
    function querySuccess(tx,result){
        $('#MyFriendsList').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#MyFriendsList').append('
< li>< a href=" #">< h3 class="ui-li-heading">'+row['Name']+'< /h3>< div class="ui-li-desc">Club '+row['Nickname']+'< /div>< /a>< /li>
');
        });
  
        $('#MyFriendsList').listview();
    }