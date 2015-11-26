// Compiled by ClojureScript 1.7.170 {}
goog.provide('will_receive_props_bug.app');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('om.next');
will_receive_props_bug.app.data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"bar"], null);
will_receive_props_bug.app.lookup = (function will_receive_props_bug$app$lookup(st,key){
return cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key));
});
if(typeof will_receive_props_bug.app.read !== 'undefined'){
} else {
will_receive_props_bug.app.read = (function (){var method_table__23919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23922__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23923__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"will-receive-props-bug.app","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23923__auto__,method_table__23919__auto__,prefer_table__23920__auto__,method_cache__23921__auto__,cached_hierarchy__23922__auto__));
})();
}
cljs.core._add_method.call(null,will_receive_props_bug.app.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27949,k,_){
var map__27950 = p__27949;
var map__27950__$1 = ((((!((map__27950 == null)))?((((map__27950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27950):map__27950);
var state = cljs.core.get.call(null,map__27950__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
}));
if(typeof will_receive_props_bug.app.mutate !== 'undefined'){
} else {
will_receive_props_bug.app.mutate = (function (){var method_table__23919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23922__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23923__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"will-receive-props-bug.app","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23923__auto__,method_table__23919__auto__,prefer_table__23920__auto__,method_cache__23921__auto__,cached_hierarchy__23922__auto__));
})();
}
cljs.core._add_method.call(null,will_receive_props_bug.app.mutate,new cljs.core.Symbol(null,"change-foo","change-foo",1212014557,null),(function (p__27952,_,p__27953){
var map__27954 = p__27952;
var map__27954__$1 = ((((!((map__27954 == null)))?((((map__27954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27954):map__27954);
var env = map__27954__$1;
var state = cljs.core.get.call(null,map__27954__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27955 = p__27953;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var value = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27954,map__27954__$1,env,state,map__27955,map__27955__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"foo","foo",1268894036),value);
});})(map__27954,map__27954__$1,env,state,map__27955,map__27955__$1,value))
], null);
}));
cljs.core._add_method.call(null,will_receive_props_bug.app.read,new cljs.core.Keyword("app","current-user","app/current-user",-868957432),(function (p__27958,key,_){
var map__27959 = p__27958;
var map__27959__$1 = ((((!((map__27959 == null)))?((((map__27959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27959):map__27959);
var env = map__27959__$1;
var state = cljs.core.get.call(null,map__27959__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),will_receive_props_bug.app.lookup.call(null,st,key)], null);
}));
/**
 * @constructor
 */
will_receive_props_bug.app.Child = (function will_receive_props_bug$app$Child(){
var this__25721__auto__ = this;
React.Component.apply(this__25721__auto__,arguments);

if(!((this__25721__auto__.initLocalState == null))){
this__25721__auto__.state = this__25721__auto__.initLocalState();
} else {
this__25721__auto__.state = {};
}

return this__25721__auto__;
});

will_receive_props_bug.app.Child.prototype = goog.object.clone(React.Component.prototype);

var x27965_27980 = will_receive_props_bug.app.Child.prototype;
x27965_27980.componentWillUpdate = ((function (x27965_27980){
return (function (next_props__25662__auto__,next_state__25663__auto__){
var this__25661__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__25661__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25661__auto__);
});})(x27965_27980))
;

x27965_27980.shouldComponentUpdate = ((function (x27965_27980){
return (function (next_props__25662__auto__,next_state__25663__auto__){
var this__25661__auto__ = this;
var or__23006__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25661__auto__),goog.object.get(next_props__25662__auto__,"omcljs$value"));
if(or__23006__auto__){
return or__23006__auto__;
} else {
var and__22994__auto__ = this__25661__auto__.state;
if(cljs.core.truth_(and__22994__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25661__auto__.state,"omcljs$state"),goog.object.get(next_state__25663__auto__,"omcljs$state"));
} else {
return and__22994__auto__;
}
}
});})(x27965_27980))
;

x27965_27980.componentWillUnmount = ((function (x27965_27980){
return (function (){
var this__25661__auto__ = this;
var r__25667__auto__ = om.next.get_reconciler.call(null,this__25661__auto__);
var cfg__25668__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25667__auto__);
var st__25669__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25668__auto__);
var indexer__25666__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25668__auto__);
if((st__25669__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__25669__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25661__auto__);
}

if((indexer__25666__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25666__auto__,this__25661__auto__);
}
});})(x27965_27980))
;

x27965_27980.componentDidUpdate = ((function (x27965_27980){
return (function (prev_props__25664__auto__,prev_state__25665__auto__){
var this__25661__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25661__auto__);
});})(x27965_27980))
;

x27965_27980.isMounted = ((function (x27965_27980){
return (function (){
var this__25661__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25661__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27965_27980))
;

x27965_27980.componentWillMount = ((function (x27965_27980){
return (function (){
var this__25661__auto__ = this;
var indexer__25666__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25666__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25666__auto__,this__25661__auto__);
}
});})(x27965_27980))
;

x27965_27980.componentWillReceiveProps = ((function (x27965_27980){
return (function (p__27966){
var map__27967 = p__27966;
var map__27967__$1 = ((((!((map__27967 == null)))?((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
var foo = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
var this$ = this;
var map__27969 = om.next._next_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foo], null)], null),this$);
var map__27969__$1 = ((((!((map__27969 == null)))?((((map__27969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27969):map__27969);
var foo__$1 = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
return console.log("WillReceiveProps: ",foo__$1);
});})(x27965_27980))
;

x27965_27980.render = ((function (x27965_27980){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27971 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27972 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27973 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27974 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27975 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__27976 = om.next.props.call(null,this$);
var map__27976__$1 = ((((!((map__27976 == null)))?((((map__27976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27976):map__27976);
var foo = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
return React.DOM.div(null,om.util.force_children.call(null,foo));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27975;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27974;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27973;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27972;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27971;
}});})(x27965_27980))
;


will_receive_props_bug.app.Child.prototype.constructor = will_receive_props_bug.app.Child;

will_receive_props_bug.app.Child.prototype.om$isComponent = true;

var x27978_27981 = will_receive_props_bug.app.Child;
x27978_27981.om$next$IQuery$ = true;

x27978_27981.om$next$IQuery$query$arity$1 = ((function (x27978_27981){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null);
});})(x27978_27981))
;


var x27979_27982 = will_receive_props_bug.app.Child.prototype;
x27979_27982.om$next$IQuery$ = true;

x27979_27982.om$next$IQuery$query$arity$1 = ((function (x27979_27982){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null);
});})(x27979_27982))
;


will_receive_props_bug.app.Child.cljs$lang$type = true;

will_receive_props_bug.app.Child.cljs$lang$ctorStr = "will-receive-props-bug.app/Child";

will_receive_props_bug.app.Child.cljs$lang$ctorPrWriter = (function (this__25723__auto__,writer__25724__auto__,opt__25725__auto__){
return cljs.core._write.call(null,writer__25724__auto__,"will-receive-props-bug.app/Child");
});
will_receive_props_bug.app.child_view = om.next.factory.call(null,will_receive_props_bug.app.Child);
/**
 * @constructor
 */
will_receive_props_bug.app.Root = (function will_receive_props_bug$app$Root(){
var this__25721__auto__ = this;
React.Component.apply(this__25721__auto__,arguments);

if(!((this__25721__auto__.initLocalState == null))){
this__25721__auto__.state = this__25721__auto__.initLocalState();
} else {
this__25721__auto__.state = {};
}

return this__25721__auto__;
});

will_receive_props_bug.app.Root.prototype = goog.object.clone(React.Component.prototype);

var x27987_27995 = will_receive_props_bug.app.Root.prototype;
x27987_27995.componentWillUpdate = ((function (x27987_27995){
return (function (next_props__25662__auto__,next_state__25663__auto__){
var this__25661__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__25661__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25661__auto__);
});})(x27987_27995))
;

x27987_27995.shouldComponentUpdate = ((function (x27987_27995){
return (function (next_props__25662__auto__,next_state__25663__auto__){
var this__25661__auto__ = this;
var or__23006__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25661__auto__),goog.object.get(next_props__25662__auto__,"omcljs$value"));
if(or__23006__auto__){
return or__23006__auto__;
} else {
var and__22994__auto__ = this__25661__auto__.state;
if(cljs.core.truth_(and__22994__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25661__auto__.state,"omcljs$state"),goog.object.get(next_state__25663__auto__,"omcljs$state"));
} else {
return and__22994__auto__;
}
}
});})(x27987_27995))
;

x27987_27995.componentWillUnmount = ((function (x27987_27995){
return (function (){
var this__25661__auto__ = this;
var r__25667__auto__ = om.next.get_reconciler.call(null,this__25661__auto__);
var cfg__25668__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25667__auto__);
var st__25669__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25668__auto__);
var indexer__25666__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25668__auto__);
if((st__25669__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__25669__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25661__auto__);
}

if((indexer__25666__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25666__auto__,this__25661__auto__);
}
});})(x27987_27995))
;

x27987_27995.componentDidUpdate = ((function (x27987_27995){
return (function (prev_props__25664__auto__,prev_state__25665__auto__){
var this__25661__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25661__auto__);
});})(x27987_27995))
;

x27987_27995.isMounted = ((function (x27987_27995){
return (function (){
var this__25661__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25661__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27987_27995))
;

x27987_27995.componentWillMount = ((function (x27987_27995){
return (function (){
var this__25661__auto__ = this;
var indexer__25666__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25661__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25666__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25666__auto__,this__25661__auto__);
}
});})(x27987_27995))
;

x27987_27995.render = ((function (x27987_27995){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27988 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27989 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27990 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27991 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27992 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,"Bug!"))),om.util.force_children.call(null,will_receive_props_bug.app.child_view.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27992;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27991;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27990;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27989;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27988;
}});})(x27987_27995))
;


will_receive_props_bug.app.Root.prototype.constructor = will_receive_props_bug.app.Root;

will_receive_props_bug.app.Root.prototype.om$isComponent = true;

var x27993_27996 = will_receive_props_bug.app.Root;
x27993_27996.om$next$IQuery$ = true;

x27993_27996.om$next$IQuery$query$arity$1 = ((function (x27993_27996){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null);
});})(x27993_27996))
;


var x27994_27997 = will_receive_props_bug.app.Root.prototype;
x27994_27997.om$next$IQuery$ = true;

x27994_27997.om$next$IQuery$query$arity$1 = ((function (x27994_27997){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null);
});})(x27994_27997))
;


will_receive_props_bug.app.Root.cljs$lang$type = true;

will_receive_props_bug.app.Root.cljs$lang$ctorStr = "will-receive-props-bug.app/Root";

will_receive_props_bug.app.Root.cljs$lang$ctorPrWriter = (function (this__25723__auto__,writer__25724__auto__,opt__25725__auto__){
return cljs.core._write.call(null,writer__25724__auto__,"will-receive-props-bug.app/Root");
});
will_receive_props_bug.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),will_receive_props_bug.app.data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),will_receive_props_bug.app.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),will_receive_props_bug.app.mutate], null))], null));
will_receive_props_bug.app.init = (function will_receive_props_bug$app$init(){
console.log("INITTTT");

console.log(cljs.core.pr_str.call(null,om.next.tree__GT_db.call(null,will_receive_props_bug.app.Root,will_receive_props_bug.app.data,true)));

return om.next.add_root_BANG_.call(null,will_receive_props_bug.app.reconciler,will_receive_props_bug.app.Root,goog.dom.getElement("app"));
});

//# sourceMappingURL=app.js.map