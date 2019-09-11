var left_list,right_list

window.onload=function(){
    left_list = new Vue({
        el: '#left_list',
        data: {
            mainlist: 'hello',
            title: 'the page star of '
        }
    })
    right_list = new Vue({
        el:'#right_list',
        data : {
            mainlist:'this is right',
            
        },
        methods:{
            reverseMessage:function(){
                this.mainlist=this.mainlist.split('').reverse().join('')
            }
        }
    })
    
}