angular.module('WebPage', [])
    .controller('appController', function() {
        function tabs(){
            var vm = this;
            vm.tabs = $(document).ready(function(){
                $('ul.tabs').tabs('select_tab', 'id');
            });
        }
    });