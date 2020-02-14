
        function deleteName(index) {
            list.splice(index, 1);
            updateView();
        }

        function addName(name){
            list.unshift(name);
            updateView();
        }