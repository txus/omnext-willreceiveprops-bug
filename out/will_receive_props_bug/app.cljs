(ns will-receive-props-bug.app
  (:require [om.dom :as dom]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]))

(def data {:foo "bar"})

(defn lookup [st key]
  (get-in st (get st key)))

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

(defmethod read :app/current-user
  [{:keys [state] :as env} key _]
  (let [st @state]
    {:value (lookup st key)}))

(defui Child
  static om/IQuery
  (query [this]
         [:foo])
  Object
  (componentWillReceiveProps [this {:keys [foo]}]
                             (js/console.log "WillReceiveProps: " foo))
  (render [this]
          (let [{:keys [foo]} (om/props this)]
            (dom/div nil foo))))

(def child-view (om/factory Child))

(defui Root
  static om/IQuery
  (query [this]
         [:foo])
  Object
  (render [this]
          (dom/div nil
                   (dom/h1 nil "Bug!")
                   (child-view (om/props this)))))

(def reconciler
  (om/reconciler
   {:state  data
    :parser (om/parser {:read read :mutate mutate})}))


(defn init []
  (js/console.log "INITTTT")
  (js/console.log (pr-str (om/tree->db Root data true)))
  (om/add-root! reconciler
                Root (gdom/getElement "app")))

(comment

  (def parser (om/parser {:read read :mutate mutate}))

  (om/tree->db Root data true)

  (parser {:state (atom (om/tree->db Root data true))} [:foo])

  (om/transact! reconciler '[(change-foo {:value "FOO"})])

(om/transact! reconciler '[(change-foo {:value "BAR"})])
(om/transact! reconciler '[(change-foo {:value "BAZ"})])
(om/transact! reconciler '[(change-foo {:value "QUUX"})])

)
