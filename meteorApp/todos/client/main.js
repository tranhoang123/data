import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

Template.leaderboard.helpers({
    players: function(){
        return Players.find({}, {sort :{score: -1 , name: 1}});
    }
});

Template.player.events({
    'click' : function(){
        session.set("selectedPlayer", this._id);
    }
});

Template.player.helpers({
    selected : function(){
        return Session.equals("selectedPlayer", this._id) ? "selected": "";
    }
});

BlazeLayout.render('layout1', { top: "header", main: "postList" });