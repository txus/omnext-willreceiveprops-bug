// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27418_27422 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27419_27423 = null;
var count__27420_27424 = (0);
var i__27421_27425 = (0);
while(true){
if((i__27421_27425 < count__27420_27424)){
var k_27426 = cljs.core._nth.call(null,chunk__27419_27423,i__27421_27425);
var v_27427 = (b[k_27426]);
(a[k_27426] = v_27427);

var G__27428 = seq__27418_27422;
var G__27429 = chunk__27419_27423;
var G__27430 = count__27420_27424;
var G__27431 = (i__27421_27425 + (1));
seq__27418_27422 = G__27428;
chunk__27419_27423 = G__27429;
count__27420_27424 = G__27430;
i__27421_27425 = G__27431;
continue;
} else {
var temp__4425__auto___27432 = cljs.core.seq.call(null,seq__27418_27422);
if(temp__4425__auto___27432){
var seq__27418_27433__$1 = temp__4425__auto___27432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27418_27433__$1)){
var c__23809__auto___27434 = cljs.core.chunk_first.call(null,seq__27418_27433__$1);
var G__27435 = cljs.core.chunk_rest.call(null,seq__27418_27433__$1);
var G__27436 = c__23809__auto___27434;
var G__27437 = cljs.core.count.call(null,c__23809__auto___27434);
var G__27438 = (0);
seq__27418_27422 = G__27435;
chunk__27419_27423 = G__27436;
count__27420_27424 = G__27437;
i__27421_27425 = G__27438;
continue;
} else {
var k_27439 = cljs.core.first.call(null,seq__27418_27433__$1);
var v_27440 = (b[k_27439]);
(a[k_27439] = v_27440);

var G__27441 = cljs.core.next.call(null,seq__27418_27433__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27418_27422 = G__27441;
chunk__27419_27423 = G__27442;
count__27420_27424 = G__27443;
i__27421_27425 = G__27444;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27445 = [];
var len__24064__auto___27448 = arguments.length;
var i__24065__auto___27449 = (0);
while(true){
if((i__24065__auto___27449 < len__24064__auto___27448)){
args27445.push((arguments[i__24065__auto___27449]));

var G__27450 = (i__24065__auto___27449 + (1));
i__24065__auto___27449 = G__27450;
continue;
} else {
}
break;
}

var G__27447 = args27445.length;
switch (G__27447) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27445.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27452 = (i + (2));
var G__27453 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27452;
ret = G__27453;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27454_27458 = cljs.core.seq.call(null,v);
var chunk__27455_27459 = null;
var count__27456_27460 = (0);
var i__27457_27461 = (0);
while(true){
if((i__27457_27461 < count__27456_27460)){
var x_27462 = cljs.core._nth.call(null,chunk__27455_27459,i__27457_27461);
ret.push(x_27462);

var G__27463 = seq__27454_27458;
var G__27464 = chunk__27455_27459;
var G__27465 = count__27456_27460;
var G__27466 = (i__27457_27461 + (1));
seq__27454_27458 = G__27463;
chunk__27455_27459 = G__27464;
count__27456_27460 = G__27465;
i__27457_27461 = G__27466;
continue;
} else {
var temp__4425__auto___27467 = cljs.core.seq.call(null,seq__27454_27458);
if(temp__4425__auto___27467){
var seq__27454_27468__$1 = temp__4425__auto___27467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27454_27468__$1)){
var c__23809__auto___27469 = cljs.core.chunk_first.call(null,seq__27454_27468__$1);
var G__27470 = cljs.core.chunk_rest.call(null,seq__27454_27468__$1);
var G__27471 = c__23809__auto___27469;
var G__27472 = cljs.core.count.call(null,c__23809__auto___27469);
var G__27473 = (0);
seq__27454_27458 = G__27470;
chunk__27455_27459 = G__27471;
count__27456_27460 = G__27472;
i__27457_27461 = G__27473;
continue;
} else {
var x_27474 = cljs.core.first.call(null,seq__27454_27468__$1);
ret.push(x_27474);

var G__27475 = cljs.core.next.call(null,seq__27454_27468__$1);
var G__27476 = null;
var G__27477 = (0);
var G__27478 = (0);
seq__27454_27458 = G__27475;
chunk__27455_27459 = G__27476;
count__27456_27460 = G__27477;
i__27457_27461 = G__27478;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27479_27483 = cljs.core.seq.call(null,v);
var chunk__27480_27484 = null;
var count__27481_27485 = (0);
var i__27482_27486 = (0);
while(true){
if((i__27482_27486 < count__27481_27485)){
var x_27487 = cljs.core._nth.call(null,chunk__27480_27484,i__27482_27486);
ret.push(x_27487);

var G__27488 = seq__27479_27483;
var G__27489 = chunk__27480_27484;
var G__27490 = count__27481_27485;
var G__27491 = (i__27482_27486 + (1));
seq__27479_27483 = G__27488;
chunk__27480_27484 = G__27489;
count__27481_27485 = G__27490;
i__27482_27486 = G__27491;
continue;
} else {
var temp__4425__auto___27492 = cljs.core.seq.call(null,seq__27479_27483);
if(temp__4425__auto___27492){
var seq__27479_27493__$1 = temp__4425__auto___27492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27479_27493__$1)){
var c__23809__auto___27494 = cljs.core.chunk_first.call(null,seq__27479_27493__$1);
var G__27495 = cljs.core.chunk_rest.call(null,seq__27479_27493__$1);
var G__27496 = c__23809__auto___27494;
var G__27497 = cljs.core.count.call(null,c__23809__auto___27494);
var G__27498 = (0);
seq__27479_27483 = G__27495;
chunk__27480_27484 = G__27496;
count__27481_27485 = G__27497;
i__27482_27486 = G__27498;
continue;
} else {
var x_27499 = cljs.core.first.call(null,seq__27479_27493__$1);
ret.push(x_27499);

var G__27500 = cljs.core.next.call(null,seq__27479_27493__$1);
var G__27501 = null;
var G__27502 = (0);
var G__27503 = (0);
seq__27479_27483 = G__27500;
chunk__27480_27484 = G__27501;
count__27481_27485 = G__27502;
i__27482_27486 = G__27503;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27504_27508 = cljs.core.seq.call(null,v);
var chunk__27505_27509 = null;
var count__27506_27510 = (0);
var i__27507_27511 = (0);
while(true){
if((i__27507_27511 < count__27506_27510)){
var x_27512 = cljs.core._nth.call(null,chunk__27505_27509,i__27507_27511);
ret.push(x_27512);

var G__27513 = seq__27504_27508;
var G__27514 = chunk__27505_27509;
var G__27515 = count__27506_27510;
var G__27516 = (i__27507_27511 + (1));
seq__27504_27508 = G__27513;
chunk__27505_27509 = G__27514;
count__27506_27510 = G__27515;
i__27507_27511 = G__27516;
continue;
} else {
var temp__4425__auto___27517 = cljs.core.seq.call(null,seq__27504_27508);
if(temp__4425__auto___27517){
var seq__27504_27518__$1 = temp__4425__auto___27517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27504_27518__$1)){
var c__23809__auto___27519 = cljs.core.chunk_first.call(null,seq__27504_27518__$1);
var G__27520 = cljs.core.chunk_rest.call(null,seq__27504_27518__$1);
var G__27521 = c__23809__auto___27519;
var G__27522 = cljs.core.count.call(null,c__23809__auto___27519);
var G__27523 = (0);
seq__27504_27508 = G__27520;
chunk__27505_27509 = G__27521;
count__27506_27510 = G__27522;
i__27507_27511 = G__27523;
continue;
} else {
var x_27524 = cljs.core.first.call(null,seq__27504_27518__$1);
ret.push(x_27524);

var G__27525 = cljs.core.next.call(null,seq__27504_27518__$1);
var G__27526 = null;
var G__27527 = (0);
var G__27528 = (0);
seq__27504_27508 = G__27525;
chunk__27505_27509 = G__27526;
count__27506_27510 = G__27527;
i__27507_27511 = G__27528;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27529 = [];
var len__24064__auto___27540 = arguments.length;
var i__24065__auto___27541 = (0);
while(true){
if((i__24065__auto___27541 < len__24064__auto___27540)){
args27529.push((arguments[i__24065__auto___27541]));

var G__27542 = (i__24065__auto___27541 + (1));
i__24065__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27531 = args27529.length;
switch (G__27531) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27529.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27532 = obj;
G__27532.push(kfn.call(null,k),vfn.call(null,v));

return G__27532;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27533 = cljs.core.clone.call(null,handlers);
x27533.forEach = ((function (x27533,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27534 = cljs.core.seq.call(null,coll);
var chunk__27535 = null;
var count__27536 = (0);
var i__27537 = (0);
while(true){
if((i__27537 < count__27536)){
var vec__27538 = cljs.core._nth.call(null,chunk__27535,i__27537);
var k = cljs.core.nth.call(null,vec__27538,(0),null);
var v = cljs.core.nth.call(null,vec__27538,(1),null);
f.call(null,v,k);

var G__27544 = seq__27534;
var G__27545 = chunk__27535;
var G__27546 = count__27536;
var G__27547 = (i__27537 + (1));
seq__27534 = G__27544;
chunk__27535 = G__27545;
count__27536 = G__27546;
i__27537 = G__27547;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27534);
if(temp__4425__auto__){
var seq__27534__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27534__$1)){
var c__23809__auto__ = cljs.core.chunk_first.call(null,seq__27534__$1);
var G__27548 = cljs.core.chunk_rest.call(null,seq__27534__$1);
var G__27549 = c__23809__auto__;
var G__27550 = cljs.core.count.call(null,c__23809__auto__);
var G__27551 = (0);
seq__27534 = G__27548;
chunk__27535 = G__27549;
count__27536 = G__27550;
i__27537 = G__27551;
continue;
} else {
var vec__27539 = cljs.core.first.call(null,seq__27534__$1);
var k = cljs.core.nth.call(null,vec__27539,(0),null);
var v = cljs.core.nth.call(null,vec__27539,(1),null);
f.call(null,v,k);

var G__27552 = cljs.core.next.call(null,seq__27534__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27534 = G__27552;
chunk__27535 = G__27553;
count__27536 = G__27554;
i__27537 = G__27555;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27533,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27533;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27556 = [];
var len__24064__auto___27562 = arguments.length;
var i__24065__auto___27563 = (0);
while(true){
if((i__24065__auto___27563 < len__24064__auto___27562)){
args27556.push((arguments[i__24065__auto___27563]));

var G__27564 = (i__24065__auto___27563 + (1));
i__24065__auto___27563 = G__27564;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27556.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27559 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27560){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27560 = meta27560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27561,meta27560__$1){
var self__ = this;
var _27561__$1 = this;
return (new cognitect.transit.t_cognitect$transit27559(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27560__$1));
});

cognitect.transit.t_cognitect$transit27559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27561){
var self__ = this;
var _27561__$1 = this;
return self__.meta27560;
});

cognitect.transit.t_cognitect$transit27559.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27559.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27559.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27559.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27560","meta27560",1782404634,null)], null);
});

cognitect.transit.t_cognitect$transit27559.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27559.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27559";

cognitect.transit.t_cognitect$transit27559.cljs$lang$ctorPrWriter = (function (this__23604__auto__,writer__23605__auto__,opt__23606__auto__){
return cljs.core._write.call(null,writer__23605__auto__,"cognitect.transit/t_cognitect$transit27559");
});

cognitect.transit.__GT_t_cognitect$transit27559 = (function cognitect$transit$__GT_t_cognitect$transit27559(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27560){
return (new cognitect.transit.t_cognitect$transit27559(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27560));
});

}

return (new cognitect.transit.t_cognitect$transit27559(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__23006__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__23006__auto__)){
return or__23006__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map