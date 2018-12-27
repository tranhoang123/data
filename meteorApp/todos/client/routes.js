import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/blog/:postId',{
	action: function(params, queryParams){
		console.log("Ohohohho", params.postId);
	}
})