// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24162_24176 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24163_24177 = null;
var count__24164_24178 = (0);
var i__24165_24179 = (0);
while(true){
if((i__24165_24179 < count__24164_24178)){
var f_24180 = cljs.core._nth.call(null,chunk__24163_24177,i__24165_24179);
cljs.core.println.call(null,"  ",f_24180);

var G__24181 = seq__24162_24176;
var G__24182 = chunk__24163_24177;
var G__24183 = count__24164_24178;
var G__24184 = (i__24165_24179 + (1));
seq__24162_24176 = G__24181;
chunk__24163_24177 = G__24182;
count__24164_24178 = G__24183;
i__24165_24179 = G__24184;
continue;
} else {
var temp__4425__auto___24185 = cljs.core.seq.call(null,seq__24162_24176);
if(temp__4425__auto___24185){
var seq__24162_24186__$1 = temp__4425__auto___24185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24162_24186__$1)){
var c__23809__auto___24187 = cljs.core.chunk_first.call(null,seq__24162_24186__$1);
var G__24188 = cljs.core.chunk_rest.call(null,seq__24162_24186__$1);
var G__24189 = c__23809__auto___24187;
var G__24190 = cljs.core.count.call(null,c__23809__auto___24187);
var G__24191 = (0);
seq__24162_24176 = G__24188;
chunk__24163_24177 = G__24189;
count__24164_24178 = G__24190;
i__24165_24179 = G__24191;
continue;
} else {
var f_24192 = cljs.core.first.call(null,seq__24162_24186__$1);
cljs.core.println.call(null,"  ",f_24192);

var G__24193 = cljs.core.next.call(null,seq__24162_24186__$1);
var G__24194 = null;
var G__24195 = (0);
var G__24196 = (0);
seq__24162_24176 = G__24193;
chunk__24163_24177 = G__24194;
count__24164_24178 = G__24195;
i__24165_24179 = G__24196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23006__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23006__auto__)){
return or__23006__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24197);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24197)))?cljs.core.second.call(null,arglists_24197):arglists_24197));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24167 = null;
var count__24168 = (0);
var i__24169 = (0);
while(true){
if((i__24169 < count__24168)){
var vec__24170 = cljs.core._nth.call(null,chunk__24167,i__24169);
var name = cljs.core.nth.call(null,vec__24170,(0),null);
var map__24171 = cljs.core.nth.call(null,vec__24170,(1),null);
var map__24171__$1 = ((((!((map__24171 == null)))?((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);
var doc = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24198 = seq__24166;
var G__24199 = chunk__24167;
var G__24200 = count__24168;
var G__24201 = (i__24169 + (1));
seq__24166 = G__24198;
chunk__24167 = G__24199;
count__24168 = G__24200;
i__24169 = G__24201;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24166);
if(temp__4425__auto__){
var seq__24166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24166__$1)){
var c__23809__auto__ = cljs.core.chunk_first.call(null,seq__24166__$1);
var G__24202 = cljs.core.chunk_rest.call(null,seq__24166__$1);
var G__24203 = c__23809__auto__;
var G__24204 = cljs.core.count.call(null,c__23809__auto__);
var G__24205 = (0);
seq__24166 = G__24202;
chunk__24167 = G__24203;
count__24168 = G__24204;
i__24169 = G__24205;
continue;
} else {
var vec__24173 = cljs.core.first.call(null,seq__24166__$1);
var name = cljs.core.nth.call(null,vec__24173,(0),null);
var map__24174 = cljs.core.nth.call(null,vec__24173,(1),null);
var map__24174__$1 = ((((!((map__24174 == null)))?((((map__24174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24174):map__24174);
var doc = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24206 = cljs.core.next.call(null,seq__24166__$1);
var G__24207 = null;
var G__24208 = (0);
var G__24209 = (0);
seq__24166 = G__24206;
chunk__24167 = G__24207;
count__24168 = G__24208;
i__24169 = G__24209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map