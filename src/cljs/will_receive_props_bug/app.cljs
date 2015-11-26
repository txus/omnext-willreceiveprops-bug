(ns will-receive-props-bug.app
  (:require [om.dom :as dom]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]))

(def data {:foo "initial value"})

(defmulti read om/dispatch)
(defmethod read :default
  [{:keys [state]} k _]
  (let [st @state]
    {:value (get st k)}))

(defmulti mutate om/dispatch)
(defmethod mutate 'change-foo
  [{:keys [state] :as env} _ {:keys [value]}]
  {:value {:keys [:foo]}
   :action #(swap! state assoc :foo value)})

(defui Child
  static om/IQuery
  (query [this]
         [:foo])
  Object
  (componentWillReceiveProps [this {:keys [foo] :as new-props}]
                             (js/console.log "Child component willReceiveProps: "
                                             (pr-str new-props)
                                             "Current props: "
                                             (pr-str (om/props this))))
  (render [this]
          (let [{:keys [foo]} (om/props this)]
            (dom/div nil (str ":foo => " foo)))))

(def child-view (om/factory Child))

(defui Root
  static om/IQuery
  (query [this]
         [:foo])
  Object
  (render [this]
          (child-view (om/props this))))

(def reconciler
  (om/reconciler
   {:state  data
    :parser (om/parser {:read read :mutate mutate})}))


(defn init []
  (om/add-root! reconciler
                Root (gdom/getElement "app")))

(comment

  (om/transact! reconciler '[(change-foo {:value "FOO"})])

  (om/transact! reconciler '[(change-foo {:value "BAR"})])

)
