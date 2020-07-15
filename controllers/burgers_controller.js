module.exports = {
    listAll: async function(connection){
        return connection.query("SELECT * FROM burgers;", function(err, data) {
            if (err) {
              throw err;
            }
            return data;
        });
    },

    update: function(){
        console.log("update")
    }
}

//export router

