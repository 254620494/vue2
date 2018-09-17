Vue.use(VueRouter);

const routes=[
	{
		path : '/', 
		component: index2
	},
	{
		path : '/sec', 
		component: welcome
	}
]

const router=new VueRouter({
	routes:routes
});




new Vue({
	el: "#app",
	data: {
		message: "aaa",
		Center:true,
		newMessage:"",
		nikeName:"",
		name: "",
		tel:"",
		mail: "",
		passWord:""
	},
	methods:{
		appCenter () {
			
		}
	}
})