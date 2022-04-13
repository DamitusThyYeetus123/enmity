const modules$1={clipboard:{props:["setString","getString"]},assets:{props:["registerAsset"]},messages:{props:["receiveMessage","sendMessage"]},clyde:{props:["createBotMessage"]},avatars:{props:["BOT_AVATARS"]},native:{props:["NativeModules"],export:"NativeModules"},React:{props:["createElement"]},Dispatcher:{props:["dirtyDispatch"]},storage:{props:["getItem"]},toasts:{props:["open","close"],ensure:e=>!e.openLazy&&!e.startDrag&&!e.init&&!e.openReplay},dialog:{props:["show","openLazy","open","close"]},token:{props:["getToken"]},rest:{props:["getAPIBaseURL"]},settings:{props:["watchKeys"]},users:{props:["fetchProfile"]},theme:{props:["theme"]},linking:{props:["openURL"]},navigation:{props:["pushLazy"]},navigationNative:{props:["NavigationContainer"]},navigationStack:{props:["createStackNavigator"]},stylesheet:{props:["createThemedStyleSheet"]},colorMap:{props:["ThemeColorMap"]},Components:{multiple:!0,props:{Forms:["Form","FormSection"],General:["Button","Text","View"]}},Locales:{props:["Messages"]}},common={},blacklist=[e=>e>=944&&e<=994,125,203,433,434,445,446,457],filters={byProps:(...e)=>t=>e.every(n=>t[n]!==void 0),byName:e=>t=>typeof t=="function"&&t.name===e,byTypeName:e=>t=>t?typeof t=="function"&&t.name===e:!1,byDisplayName:e=>t=>t?typeof t=="function"&&t.displayName===e:!1,byTypeString:(...e)=>t=>t?.default?e.every(n=>t.default.toString?.()?.includes?.(n)):!1,byDefaultString:(...e)=>t=>t?.default?e.every(n=>t.default.toString?.()?.includes?.(n)):!1,byString:(...e)=>t=>e.every(n=>t.toString?.()?.includes?.(n))},getters=[];Object.entries(modules$1).map(([e,t])=>{t.multiple?Object.entries(t.props).map(([n,o])=>{getters.push({id:n,filter:r=>filters.byProps(...o)(r),submodule:e})}):t.props?t.props.every(n=>Array.isArray(n))?getters.push({id:e,filter:n=>{const o=t.props.some(r=>r.every(a=>n[a]));return o&&t.ensure&&!t.ensure(n)?!1:o},map:t.export}):getters.push({id:e,filter:n=>{const o=filters.byProps(...t.props)(n);return o&&t.ensure&&t.ensure(n)===!1?!1:o},map:t.export}):t.displayName?getters.push({id:e,filter:filters.byDisplayName(t.displayName),map:t.export}):t.filter&&getters.push({id:e,filter:t.filter,map:t.export})});const results=bulk(...getters.map(({filter:e})=>e));getters.map(({id:e,map:t,submodule:n},o)=>{let r=l=>l;if(typeof t=="string")r=l=>l[t];else if(Array.isArray(t)){let l={};r=s=>{for(const c of t)l[c]=s[c];return l}}const a=r(results[o]);n?(common[n]??={},common[n][e]=a):common[e]=a});function getModule$1(e,{all:t=!1,traverse:n=!0,defaultExport:o=!0}={}){if(typeof e!="function")return null;const r=[],a=function(l,s){try{return e(l,s)}catch{return!1}};for(const l in modules){if(blacklist.some(c=>typeof c=="function"?c(l):c===Number(l)))continue;modules[l].isInitialized||__r(Number(l));const s=modules[l].publicModule.exports;if(!(!s||s===window)){if(typeof s=="object"){if(a(s,l)){if(!t)return s;r.push(s)}if(s.__esModule&&s.default&&a(s.default,l)){const c=o?s.default:s;if(!t)return c;r.push(c)}if(n&&s.__esModule){for(const c in s)if(s[c]!==void 0&&a(s[c],l)){if(!t)return s[c];r.push(s[c])}}}else if(typeof s=="function"){if(!a(s,l))continue;if(!t)return s;r.push(s)}}}return t?r:r[0]}function getModules$1(e){return getModule$1(e,{all:!0})}function bulk(...e){const t=new Array(e.length),n=e.map(o=>r=>{try{return o(r)}catch{return!1}});return getModule$1(o=>{for(let r=0;r<n.length;r++){const a=n[r];typeof a!="function"||!a(o)||t[r]!=null||(t[r]=o)}return t.filter(String).length===e.length}),t}function getByProps(...e){const[t,{bulk:n=!1,...o}]=parseOptions(e);if(n){const r=t.map(a=>Array.isArray(a)?r.byProps(...a):r.byProps(a)).concat({...o});return n(...r)}return getModule$1(filters.byProps(...t),o)}function getByDisplayName(...e){const[t,{bulk:n=!1,default:o=!0,...r}]=parseOptions(e);if(n){const a=t.map(filters.byDisplayName).concat({defaultExport:o,...r});return n(...a)}return getModule$1(filters.byDisplayName(t[0]),{defaultExport:o,...r})}function getByTypeName(...e){const[t,{bulk:n=!1,default:o=!0,...r}]=parseOptions(e);if(n){const a=t.map(filters.byTypeName).concat({defaultExport:o,...r});return n(...a)}return getModule$1(filters.byTypeName(t[0]),{defaultExport:o,...r})}function getByName(...e){const[t,{bulk:n=!1,default:o=!0,...r}]=parseOptions(e);if(n){const a=t.map(filters.byName).concat({defaultExport:o,...r});return n(...a)}return getModule$1(filters.byName(t[0]),{defaultExport:o,...r})}function getByDefaultString(...e){const[t,{bulk:n=!1,...o}]=parseOptions(e);if(n){const r=t.map(a=>Array.isArray(a)?r.byDefaultString(...a):r.byDefaultString(a)).concat({...o});return n(...r)}return getModule$1(filters.byDefaultString(...t),o)}function getByTypeString(...e){const[t,{bulk:n=!1,...o}]=parseOptions(e);if(n){const r=t.map(a=>Array.isArray(a)?r.byTypeString(...a):r.byTypeString(a)).concat({...o});return n(...r)}return getModule$1(filters.byTypeString(...t),o)}function getByString(...e){const[t,{bulk:n=!1,...o}]=parseOptions(e);if(n){const r=t.map(a=>Array.isArray(a)?r.byString(...a):r.byString(a)).concat({...o});return n(...r)}return getModule$1(filters.byString(...t),o)}function parseOptions(e,t=n=>typeof n=="object"&&!Array.isArray(n)){return[e,t(e[e.length-1])?e.pop():{}]}var Modules=Object.freeze({__proto__:null,common,filters,getModule:getModule$1,getModules:getModules$1,bulk,getByProps,getByDisplayName,getByTypeName,getByName,getByDefaultString,getByTypeString,getByString});const REST=common.rest;async function getRequest(e){return REST.get(e)}async function postRequest(e){return REST.post(e)}async function putRequest(e){return REST.put(e)}async function patchRequest(e){return REST.patch(e)}async function deleteRequest(e){return REST.delete(e)}async function getAPIBaseURL(){return REST.getAPIBaseURL()}var REST$1=Object.freeze({__proto__:null,getRequest,postRequest,putRequest,patchRequest,deleteRequest,getAPIBaseURL}),getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(e){return typeof e=="string"&&REGEX.test(e)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(byteToHex[e[t+0]]+byteToHex[e[t+1]]+byteToHex[e[t+2]]+byteToHex[e[t+3]]+"-"+byteToHex[e[t+4]]+byteToHex[e[t+5]]+"-"+byteToHex[e[t+6]]+byteToHex[e[t+7]]+"-"+byteToHex[e[t+8]]+byteToHex[e[t+9]]+"-"+byteToHex[e[t+10]]+byteToHex[e[t+11]]+byteToHex[e[t+12]]+byteToHex[e[t+13]]+byteToHex[e[t+14]]+byteToHex[e[t+15]]).toLowerCase();if(!validate(n))throw TypeError("Stringified UUID is invalid");return n}function v4(e,t,n){e=e||{};var o=e.random||(e.rng||rng)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return stringify(o)}const URLHandler=common.linking,replies={};URLHandler.addEventListener("url",e=>{let t=e.url;t=decodeURIComponent(t.replace("com.hammerandchisel.discord://",""));try{const n=JSON.parse(t);if(n.data===void 0)return;replies[n.id]&&(replies[n.id](n.data),delete replies[n.id])}catch{return}});function sendCommand(e,t=[],n){const o=v4();URLHandler.openURL(`com.hammerandchisel.discord://enmity?id=${o}&command=${e}&params=${t.join(",")}`).then(()=>{n&&(replies[o]=n)})}const Settings$2=common.theme,theme=window.themes?.theme??"";let themes$2=window.themes?.list??[];function getTheme(){return theme}function getThemeByName(e){return themes$2.find(t=>t.name===e)}function listThemes(){return themes$2.map(e=>e.name)}async function installTheme(e,t){sendCommand("install-theme",[e],n=>{t(n),getRequest(e).then(o=>{const r=JSON.parse(o.text);themes$2.push(r)}).catch(o=>{console.error(o)})})}async function applyTheme(e,t){sendCommand("apply-theme",[e,Settings$2.theme],n=>{t(n)})}async function removeTheme(e){sendCommand("remove-theme",[],t=>{e(t)})}async function uninstallTheme(e,t){sendCommand("uninstall-theme",[e],n=>{t(n),themes$2=themes$2.filter(o=>o.name!==e)})}const React=common.React,ComponentsModule=common.Components.General,FormsModule=common.Components.Forms,{lazy,memo,useCallback,useContext,useEffect,useImperativeHandle,useMemo,useReducer,useRef,useState}=React,{Alert,Button,FlatList,Image,ImageBackground,KeyboardAvoidingView,Modal,Pressable,RefreshControl,ScrollView,SectionList,StatusBar,StyleSheet:StyleSheet$2,Switch,Text,TextInput,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Touchable,View,VirtualizedList}=ComponentsModule,{Form,FormArrow,FormCTA,FormCTAButton,FormCardSection,FormCheckbox,FormDivider,FormHint,FormIcon,FormInput,FormLabel,FormRadio,FormRow,FormSection,FormSelect,FormSubLabel,FormSwitch,FormTernaryCheckBox,FormText,FormTextColors,FormTextSizes}=FormsModule;var React$1=Object.freeze({__proto__:null,React,lazy,memo,useCallback,useContext,useEffect,useImperativeHandle,useMemo,useReducer,useRef,useState,Alert,Button,FlatList,Image,ImageBackground,KeyboardAvoidingView,Modal,Pressable,RefreshControl,ScrollView,SectionList,StatusBar,StyleSheet:StyleSheet$2,Switch,Text,TextInput,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Touchable,View,VirtualizedList,Form,FormArrow,FormCTA,FormCTAButton,FormCardSection,FormCheckbox,FormDivider,FormHint,FormIcon,FormInput,FormLabel,FormRadio,FormRow,FormSection,FormSelect,FormSubLabel,FormSwitch,FormTernaryCheckBox,FormText,FormTextColors,FormTextSizes});const patches=[];function getPatchesByCaller(e){const t=[];for(const n of patches)for(const o of n.patches)o.caller===e&&t.push(o);return t}function unpatchAll(e){const t=getPatchesByCaller(e);if(!!t.length)for(const n of t)n.unpatch()}function override(e){return function(){if(!e.patches.length)return e.original.apply(this,arguments);let t,n=arguments;for(const r of e.patches.filter(a=>a.type==="before"))try{const a=r.callback(this,n,e.original.bind(this));Array.isArray(a)&&(n=a)}catch(a){console.error(`Could not fire before patch for ${e.func} of ${r.caller}`),console.error(a)}const o=e.patches.filter(r=>r.type==="instead");if(!o.length)t=e.original.apply(this,n);else for(const r of o)try{const a=r.callback(this,n,e.original.bind(this));a!==void 0&&(t=a)}catch(a){console.error(`Could not fire instead patch for ${e.func} of ${r.caller}`),console.error(a)}for(const r of e.patches.filter(a=>a.type==="after"))try{const a=r.callback(this,n,t);a!==void 0&&(t=a)}catch(a){console.error(`Could not fire after patch for ${e.func} of ${r.caller}`),console.error(a)}return t}}function push([e,t,n]){const o={caller:e,mdl:t,func:n,original:t[n],unpatch:()=>{o.mdl[o.func]=o.original,o.patches=[]},patches:[]};return t[n]=override(o),Object.assign(t[n],o.original,{toString:()=>o.original.toString(),__original:o.original}),patches.push(o),o}function get(e,t,n){const o=patches.find(r=>r.mdl===t&&r.func===n);return o||push([e,t,n])}function patch(e,t,n,o,r="after"){const a=get(e,t,n),l={caller:e,type:r,id:a.patches.length,callback:o,unpatch:()=>{if(a.patches.splice(a.patches.findIndex(s=>s.id===l.id&&s.type===r),1),a.patches.length<=0){const s=patches.findIndex(c=>c.mdl===t&&c.func===n);patches[s].unpatch(),patches.splice(s,1)}}};return a.patches.push(l),l.unpatch}function before(e,t,n,o){return patch(e,t,n,o,"before")}function instead(e,t,n,o){return patch(e,t,n,o,"instead")}function after(e,t,n,o){return patch(e,t,n,o,"after")}function create(e){return{getPatchesByCaller,before:(t,n,o)=>before(e,t,n,o),instead:(t,n,o)=>instead(e,t,n,o),after:(t,n,o)=>after(e,t,n,o),unpatchAll:()=>unpatchAll(e)}}var Patcher$1=Object.freeze({__proto__:null,create,before,instead,after,unpatchAll});const Patcher=create("enmity-commands"),[Commands,Discovery,Assets$1]=bulk(filters.byProps("getBuiltInCommands"),filters.byProps("useApplicationCommandsDiscoveryState"),filters.byProps("getGuildTemplateIconURL"));let commands=[];const section={id:"enmity",type:1,name:"Enmity",icon:"https://files.enmity.app/icon.png"};Patcher.after(Commands,"getBuiltInCommands",(e,t,n)=>[...n,...commands.values()]),Patcher.after(Assets$1,"getApplicationIconURL",(e,[t],n)=>{if(t.id==="enmity")return section.icon}),Patcher.after(Discovery,"useApplicationCommandsDiscoveryState",(e,[,,,t],n)=>{if(t!==!1)return n;if(!n.discoverySections.find(r=>r.key===section.id)&&commands.length){const r=[...commands.values()];n.discoveryCommands.push(...r),n.commands.push(...r.filter(a=>!n.commands.some(l=>l.name===a.name))),n.discoverySections.push({data:r,key:section.id,section}),n.sectionsOffset.push(commands.length)}!n.applicationCommandSections.find(r=>r.id===section.id)&&commands.length&&n.applicationCommandSections.push(section);const o=n.discoverySections.findIndex(r=>r.key==="-2");if(n.discoverySections[o]?.data){const r=n.discoverySections[o];r.data=r.data.filter(a=>!a.__enmity),r.data.length===0&&n.discoverySections.splice(o,1)}});function registerCommands(e,t){t.map(n=>{n.__enmity=!0,n.caller=e}),commands.push(...t)}function unregisterCommands(e){commands=commands.filter(t=>t.caller!==e)}var Commands$1=Object.freeze({__proto__:null,section,registerCommands,unregisterCommands});const plugins$1=[];let enabled=window.plugins.enabled,disabled=window.plugins.disabled;function registerPlugin(e){e.onEnable=()=>{e.onStart(),e.commands&&registerCommands(e.name,e.commands),console.log(`${e.name} has been enabled`)},e.onDisable=()=>{if(e.patches)for(const t of e.patches)t.unpatchAll();e.commands&&unregisterCommands(e.name),e.onStop(),console.log(`${e.name} has been disabled`)},enabled.includes(e.name)&&e.onEnable(),disabled.includes(e.name)&&e.onDisable(),plugins$1.push(e)}function getPlugin(e){return plugins$1.find(t=>t.name===e)}function getPlugins(){return plugins$1}function getEnabledPlugins(){return enabled}function getDisabledPlugins(){return disabled}function disablePlugin(e,t){enabled.includes(e)&&enabled.splice(enabled.indexOf(e),1),disabled.push(e),getPlugin(e).onDisable(),sendCommand("disable-plugin",[e],t)}function enablePlugin(e,t){disabled.includes(e)&&disabled.splice(disabled.indexOf(e),1),disabled.push(e),getPlugin(e).onEnable(),sendCommand("enable-plugin",[e],t)}function evalPlugin(url){getRequest(url).then(response=>{const code=response.text,name=url.split("/").pop().split(".")[0],id=Number(Object.keys(window.modules).pop())+1,wrapper=`__d(function(...args) {
        try {
          ${code}
        } catch(err) {
          console.log(err);
        }
      }, ${id}, []);
      __r(${id})`;enabled.push(name),eval(wrapper)}).catch(e=>{console.error(e)})}function installPlugin(e,t){sendCommand("install-plugin",[e],n=>{evalPlugin(e),t(n)})}function uninstallPlugin(e,t){disablePlugin(e),enabled=enabled.filter(n=>n!==e),disabled=disabled.filter(n=>n!==e),sendCommand("uninstall-plugin",[e],n=>{t(n)})}var Plugins=Object.freeze({__proto__:null,registerPlugin,getPlugin,getPlugins,getEnabledPlugins,getDisabledPlugins,disablePlugin,enablePlugin,evalPlugin,installPlugin,uninstallPlugin});const Dialog=common.dialog;function showDialog(e){Dialog.show(e)}var Dialog$1=Object.freeze({__proto__:null,showDialog});const Toasts=common.toasts;function showToast(e){Toasts.open(e)}var Toasts$1=Object.freeze({__proto__:null,showToast});const Navigation$2=common.navigation,NavigationNative$1=common.navigationNative,NavigationStack$1=common.navigationStack,StyleSheet$1=common.stylesheet,ColorMap$1=common.colorMap,{NavigationContainer:NavigationContainer$1}=NavigationNative$1,{createStackNavigator:createStackNavigator$1}=NavigationStack$1,{createThemedStyleSheet:createThemedStyleSheet$1}=StyleSheet$1,{ThemeColorMap:ThemeColorMap$1}=ColorMap$1,navbarStyle$1=createThemedStyleSheet$1({container:{backgroundColor:ThemeColorMap$1.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:ThemeColorMap$1.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:ThemeColorMap$1.HEADER_PRIMARY}}),cardStyle$1=createThemedStyleSheet$1({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:ThemeColorMap$1.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:ThemeColorMap$1.BACKGROUND_SECONDARY},text:{color:ThemeColorMap$1.TEXT_DANGER}}),PluginCard=({plugin:e,removePlugin:t})=>{const[n,o]=useState(!0);return useEffect(()=>{const r=getEnabledPlugins().includes(e.name);o(r)},[]),React.createElement(View,{style:cardStyle$1.cardContainer},React.createElement(View,{style:cardStyle$1.cardHeader},React.createElement(FormRow,{label:e.name,trailing:React.createElement(TouchableOpacity,{onPress:()=>{showDialog({title:"Uninstall Plugin",body:`Are you sure you want to uninstall ${e.name}?`,confirmText:"Yes",cancelText:"No",onConfirm:()=>{uninstallPlugin(e.name,()=>{showToast({content:`${e.name} has been uninstalled.`}),t(e.name)})}})}},React.createElement(Text,{style:cardStyle$1.text},"Uninstall"))})),React.createElement(View,{style:cardStyle$1.cardBody},React.createElement(FormRow,{label:"Enabled",trailing:React.createElement(FormSwitch,{value:n,onValueChange:r=>{o(r),showToast({content:`${e.name} has been ${r?"enabled":"disabled"}.`}),r?enablePlugin(e.name):disablePlugin(e.name)}})})))},PluginsScreen=()=>{const[e,t]=useState([]);useEffect(()=>{t(getPlugins)},[]);const n=o=>{t(e.filter(r=>r.name!==o))};return React.createElement(View,{style:{flex:1}},React.createElement(Form,null,e.map(o=>React.createElement(PluginCard,{plugin:o,removePlugin:n}))))},Stack$1=createStackNavigator$1(),PluginPage=()=>React.createElement(NavigationContainer$1,null,React.createElement(Stack$1.Navigator,{style:navbarStyle$1.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:navbarStyle$1.cardStyle,headerStyle:navbarStyle$1.header,headerTitleContainerStyle:navbarStyle$1.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},React.createElement(Stack$1.Screen,{name:"Plugins",component:PluginsScreen,options:{headerTitleStyle:{color:"white"},headerLeft:()=>React.createElement(Button,{color:"#fff",title:"Close",onPress:()=>Navigation$2.pop()}),headerRight:()=>React.createElement(Button,{color:"#fff",title:"Add",onPress:()=>{Alert.prompt("Install a plugin","Please enter the URL of the plugin to install.",e=>{installPlugin(e,t=>{showToast({content:"Plugin has been installed. Please reload Discord."})})})}})}})));var Themes=Object.freeze({__proto__:null,getTheme,getThemeByName,listThemes,applyTheme,removeTheme,uninstallTheme});const Native=common.native;function reloadDiscord(){Native.BundleUpdaterManager.reload()}function getVersion(){return Native.InfoDictionaryManager.Version}function getBuild(){return Native.InfoDictionaryManager.Build}function getDevice(){return Native.DCDDeviceManager.device}function getSystemVersion(){return Native.DCDDeviceManager.systemVersion}const Navigation$1=common.navigation,NavigationNative=common.navigationNative,NavigationStack=common.navigationStack,StyleSheet=common.stylesheet,ColorMap=common.colorMap,{NavigationContainer}=NavigationNative,{createStackNavigator}=NavigationStack,{createThemedStyleSheet}=StyleSheet,{ThemeColorMap}=ColorMap,navbarStyle=createThemedStyleSheet({container:{backgroundColor:ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:ThemeColorMap.HEADER_PRIMARY}}),cardStyle=createThemedStyleSheet({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:ThemeColorMap.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:ThemeColorMap.BACKGROUND_SECONDARY},text:{color:ThemeColorMap.TEXT_DANGER}}),ThemeCard=({theme:e,deleteTheme:t})=>React.createElement(View,{style:cardStyle.cardContainer},React.createElement(View,{style:cardStyle.cardHeader},React.createElement(FormRow,{label:e,trailing:React.createElement(TouchableOpacity,{onPress:()=>{showDialog({title:"Uninstall Theme",body:`Are you sure you want to uninstall ${e}?`,confirmText:"Yes",cancelText:"No",onConfirm:()=>{uninstallTheme(e,n=>{showToast({content:n}),t(e)})}})}},React.createElement(Text,{style:cardStyle.text},"Uninstall"))})),React.createElement(View,{style:cardStyle.cardBody},React.createElement(FormRow,{label:"Apply",onPress:()=>{applyTheme(e,n=>{showDialog({title:"Theme Applied",body:"Applying a theme requires a restart, would you like to restart Discord to apply the new theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}))),ThemesScreen=()=>{const[e,t]=useState([]);useEffect(()=>{t(listThemes())},[]);const n=o=>{getTheme()===o&&removeTheme(),t(e.filter(r=>r!==o))};return React.createElement(View,{style:{flex:1}},React.createElement(Form,null,getTheme()!==""&&React.createElement(FormRow,{label:"Remove applied theme",onPress:()=>{removeTheme().then(()=>{showDialog({title:"Theme Removed",body:"Removing the applied theme requires a restart, would you like to restart Discord to remove the applied theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}),e.map(o=>React.createElement(ThemeCard,{theme:o,deleteTheme:n}))))},Stack=createStackNavigator(),ThemePage=()=>React.createElement(NavigationContainer,null,React.createElement(Stack.Navigator,{style:navbarStyle.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:navbarStyle.cardStyle,headerStyle:navbarStyle.header,headerTitleContainerStyle:navbarStyle.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},React.createElement(Stack.Screen,{name:"Themes",component:ThemesScreen,options:{headerTitleStyle:{color:"white"},headerLeft:()=>React.createElement(Button,{color:"#fff",title:"Close",onPress:()=>Navigation$1.pop()}),headerRight:()=>React.createElement(Button,{color:"#fff",title:"Add",onPress:()=>{Alert.prompt("Install a theme","Please enter the URL of the theme to install.",e=>{if(!e.includes("json")){showToast({content:"Invalid url for theme."});return}installTheme(e,t=>{showToast({content:t})})})}})}}))),Navigation=common.navigation;function patchSettings(){const e=create("enmity-settings");let t;const n=getByTypeName("UserSettingsOverviewWrapper",{default:!1}),o=e.after(n,"default",(r,a,l)=>{if(t!==void 0)return;o(),t=l.type;const{openURL:s}=getByProps("handleSupportedURL"),c=common.Locales.Messages;e.after(t.prototype,"render",(u,f,{props:{children:d}})=>{const p=d.findIndex(g=>g.props.title===c.PREMIUM_SETTINGS),{version:m}=window.enmity;d.splice(p,0,React.createElement(React.Fragment,null,React.createElement(FormSection,{title:"Enmity"},React.createElement(FormRow,{label:"Enmity",trailing:React.createElement(FormLabel,{text:m}),onPress:()=>{s(`https://github.com/enmity-mod/enmity/commit/${m}`)}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:"Plugins",trailing:React.createElement(FormArrow,null),onPress:()=>{Navigation.push(PluginPage,{})}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:"Themes",trailing:React.createElement(FormArrow,null),onPress:()=>{Navigation.push(ThemePage,{})}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{style:{color:"#d83c3f"},text:"Reload Discord"}),arrowShown:!0,onPress:()=>{showDialog({title:"Reload Discord",body:"Are you sure you want to reload Discord?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})}})),React.createElement(FormSection,null,React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"Discord"}),trailing:React.createElement(FormArrow,null),onPress:()=>{s("https://discord.gg/rMdzhWUaGT")}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"GitHub"}),trailing:React.createElement(FormArrow,null),onPress:()=>{s("https://github.com/enmity-mod/enmity")}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"Twitter"}),trailing:React.createElement(FormArrow,null),onPress:()=>{s("https://twitter.com/enmityapp")}}),React.createElement(FormDivider,null))))})})}function applyPatches(){try{patchSettings()}catch(e){console.log(e.message)}}function modulesBlacklist(e){return e===203||e===433||e===434||e===445||e===446||e===457||e>=944&&e<=994}function getModules(e,t=!1){const n=r=>{if(modulesBlacklist(Number(r)))return;const a=modules[r];if(a.isInitialized||__r(Number(r)),a.publicModule.exports!==void 0)return e(a.publicModule.exports)};return(t?[Object.keys(modules).find(n)]:Object.keys(modules).filter(n)).filter(r=>r!==void 0).map(r=>Number(r))}function getModule(e,t=!0){const n=getModules(e,!0);if(n.length===0)return;const{publicModule:o}=modules[n[0]];return t?o.exports:o}function getModuleByProps(...e){return getModule(t=>e.every(n=>(t[n]??t.default?.[n])!==void 0),!0)}function getModuleByIndex(e){const t=modules[e];if(t!==void 0)return t.isInitialized||__r(Number(e)),t.publicModule}const Assets=common.assets;function getAssetByName(e){let t,n=1;for(;t=Assets.getAssetByID(n),!(t===void 0||t.name===e);)n+=1;return{id:n,...t}}function getAssets(){const e=[];let t=1;for(;;){const n=Assets.getAssetByID(t);if(n===void 0)break;e.push({id:t,...n}),t+=1}return e}const Users=common.users;async function fetchCurrentUser(){return Users.fetchCurrentUser()}async function fetchProfile(e){return Users.fetchProfile(e)}async function getUser(e){return Users.getUser(e)}var Users$1=Object.freeze({__proto__:null,fetchCurrentUser,fetchProfile,getUser});const Storage=common.storage;async function getItem(e){return Storage.getItem(e)}async function setItem(e,t){return Storage.setItem(e,t)}async function removeItem(e){return Storage.removeItem(e)}var Storage$1=Object.freeze({__proto__:null,getItem,setItem,removeItem});const Settings=common.settings;function getSetting(e){return Settings.get(e)}function setSetting(e){Settings.set(e)}var Settings$1=Object.freeze({__proto__:null,getSetting,setSetting});const Clipboard=common.clipboard;function setString(e){return Clipboard.setString(e)}async function getString(){return Clipboard.getString()}var Clipboard$1=Object.freeze({__proto__:null,setString,getString});const Token=common.token;function getToken(){return Token.getToken()}function setToken(e){return Token.setToken(e)}function hideToken(){Token.hideToken()}function showToken(){Token.showToken()}function removeToken(){Token.removeToken()}var Token$1=Object.freeze({__proto__:null,getToken,setToken,hideToken,showToken,removeToken});const Messages=common.messages,BotMessages=common.clyde,Images=common.avatars;Images.BOT_AVATARS.ENMITY="https://github.com/enmity-mod.png";function sendReply(e,t,n,o){const r=BotMessages.createBotMessage(e,"");r.author.username=n??"Enmity",r.author.avatar=o?n:"ENMITY",o&&(Images.BOT_AVATARS[n]=o),typeof t=="string"?r.content=t:Object.assign(r,t),Messages.receiveMessage(e,r)}var Clyde=Object.freeze({__proto__:null,sendReply});function prepareApi(){window.enmity={modules:Modules,themer:Themes,patcher:Patcher$1,version:"24938ca",plugins:Plugins,clipboard:Clipboard$1,clyde:Clyde,commands:Commands$1,dialog:Dialog$1,rest:REST$1,react:React$1,settings:Settings$1,storage:Storage$1,toast:Toasts$1,token:Token$1,users:Users$1,components:common.components,native:{reloadDiscord,getVersion,getBuild,getDevice,getSystemVersion},getModule,getModules,getModuleByProps,getModuleByIndex,getAssetByName,getAssets}}var ApplicationCommandSectionType;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(ApplicationCommandSectionType||(ApplicationCommandSectionType={}));var ApplicationCommandType;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(ApplicationCommandType||(ApplicationCommandType={}));var ApplicationCommandInputType;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(ApplicationCommandInputType||(ApplicationCommandInputType={}));var ApplicationCommandPermissionType;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(ApplicationCommandPermissionType||(ApplicationCommandPermissionType={}));var ApplicationCommandOptionType;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(ApplicationCommandOptionType||(ApplicationCommandOptionType={}));var InteractionTypes;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(InteractionTypes||(InteractionTypes={}));const list={id:"installed-plugins",applicationId:section.id,name:"plugins",displayName:"plugins",description:"List installed plugins",displayDescription:"List installed plugins",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(e,t)=>{const n=t.channel.id;if(getPlugins().length===0){sendReply(n,"No plugins installed.");return}const r=getEnabledPlugins(),a=getDisabledPlugins();let l="";r.length>0&&(l=`**Enabled plugins (${r.length})**:
`,l+=`> ${r.join(", ")}
`),a.length>0&&(l+=`**Disabled plugins (${a.length})**:
`,l+=`> ${a.join(", ")}`),sendReply(n,l)}},install={id:"install-plugin",applicationId:section.id,name:"install",displayName:"install",description:"Install a plugin",displayDescription:"Install a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin url",displayDescription:"Plugin url",required:!0,type:ApplicationCommandOptionType.String}],execute:(e,t)=>{const n=e[0].value,o=t.channel.id;installPlugin(n,r=>{sendReply(o,r)})}},uninstall={id:"uninstall-plugin",applicationId:section.id,name:"uninstall",displayName:"uninstall",description:"Uninstall a plugin",displayDescription:"Uninstall a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(e,t)=>{const n=e[0].value,o=t.channel.id;uninstallPlugin(n,r=>{sendReply(o,r)})}},disable={id:"disable-plugin",applicationId:section.id,name:"disable",displayName:"disable",description:"Disable a plugin",displayDescription:"Disable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(e,t)=>{const n=e[0].value,o=t.channel.id;disablePlugin(n,r=>{if(r==="yes"){sendReply(o,`**${n}** has been disabled.`);return}sendReply(o,`Error when disabling **${n}**.`)})}},enable={id:"enable-plugin",applicationId:section.id,name:"enable",displayName:"enable",description:"Enable a plugin",displayDescription:"Enable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(e,t)=>{const n=e[0].value,o=t.channel.id;enablePlugin(n,r=>{if(r==="yes"){sendReply(o,`**${n}** has been enabled.`);return}sendReply(o,`Error when enabling **${n}**.`)})}};var plugins=[list,install,uninstall,disable,enable];const themes={id:"list-themes",applicationId:section.id,name:"themes",displayName:"themes",description:"List available themes",displayDescription:"List available themes",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(e,t)=>{const n=listThemes();if(n.length===0){sendReply(t.channel.id,"No themes installed.");return}sendReply(t.channel.id,`**Installed themes (${n.length})**: ${n.join(", ")}`)}},apply={id:"apply-theme",applicationId:section.id,name:"apply",displayName:"apply",description:"Apply a theme",displayDescription:"Apply a theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"name",displayName:"name",description:"Theme's name",displayDescription:"Theme's name",type:ApplicationCommandOptionType.String,required:!0,choices:listThemes().map(e=>({name:e,displayName:e,value:e}))}],execute:(e,t)=>{const n=e[0].value;getThemeByName(n)||sendReply(t.channel.id,"Theme couldn't be found."),applyTheme(n).then(r=>{sendReply(t.channel.id,r)})}},clear={id:"clear-theme",applicationId:section.id,name:"clear",displayName:"clear",description:"Remove applied theme",displayDescription:"Remove applied theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(e,t)=>{removeTheme().then(n=>{sendReply(t.channel.id,n)})}};var themes$1=[themes,apply,clear];const debug={id:"debug-command",name:"debug",displayName:"debug",description:"Print out your device information",displayDescription:"Print out your device information",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltInText,execute:()=>{let e=`**Debug Info:**
`;return e+=`> Enmity: ${window.enmity.version}
`,e+=`> Discord: ${getVersion()} (${getBuild()})
`,e+=`> Device: ${getDevice()}
`,e+=`> System: ${getSystemVersion()}
`,{content:e}}},reload={id:"reload-command",name:"reload",displayName:"reload",description:"Reload Discord",displayDescription:"Reload Discord",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(e){reloadDiscord()}},token={id:"token-command",name:"token",displayName:"token",description:"Show your Discord's token",displayDescription:"Show your Discord's token",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(e,t){sendReply(t.channel.id,getToken())}};var utils=[debug,reload,token];const logger=getModule$1(e=>e.default?.name==="Logger"),EnmityLogger=new logger.default("Enmity");let socket;function connectWebsocket(host){console.log("Connecting to debug ws"),socket!==void 0&&socket.readyState!==WebSocket.CLOSED&&(socket.close(),socket=null),socket=new WebSocket(`ws://${host}`),socket.addEventListener("open",()=>{console.log("Connected with debug websocket"),showToast({content:"Connected to the websocket server."})}),socket.addEventListener("error",e=>{console.log(`Error with debug websocket: ${e.message}`),showToast({content:"An error occured with the websocket connection."})}),socket.addEventListener("close",e=>{console.log(`Error with debug websocket: ${e.message}`),showToast({content:"The websocket connection has been closed."})}),socket.addEventListener("message",message=>{try{console.log(eval(message.data))}catch(e){console.error(e)}})}function prepareWebsocket(){const e=nativeLoggingHook;globalThis.nativeLoggingHook=(t,n)=>(socket?.readyState===WebSocket.OPEN&&socket.send(JSON.stringify({level:n,message:t})),EnmityLogger.log(t),e(t,n)),window.enmity_debug===!0&&connectWebsocket(`${window.enmity_debug_ip}:9090`)}function sendMessage(e){socket?.readyState===WebSocket.OPEN&&socket.send(e)}const connect={id:"websocket-devtools",applicationId:section.id,name:"websocket",displayName:"websocket",description:"Connect to the websocket server",displayDescription:"Connect to the websocket server",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"host",displayName:"host",description:"Host of the debugger",displayDescription:"Host of the debugger",type:ApplicationCommandOptionType.String,required:!0}],execute:e=>{const t=e[0].value;connectWebsocket(t)}},dump={id:"dump-command",applicationId:section.id,name:"dump",displayName:"dump",description:"Dump Discord's modules",displayDescription:"Dump Discord's modules",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(e,t){const n=t.channel.id,o=window.modules;function r(a){if(typeof a=="function")return a.toString();if(Array.isArray(a))return a.map(r);if(typeof a=="object"){const l={};for(const s in a)l[s]=r(a[s]);return l}return a}for(const a of Object.keys(o))try{const l=o[a],s={id:a};if(!l.publicModule?.exports)continue;const c=l.publicModule.exports;for(const u of Object.keys(l.publicModule.exports))s[u]=r(c[u]);sendMessage(JSON.stringify(s,null,"	"))}catch(l){console.log(`Couldn't dump module ${a}`),console.log(l)}sendReply(n,"Modules has been dumped.")}};var websocket=[connect,dump];function prepareCommands(){const e=[...plugins,...websocket,...utils,...themes$1];registerCommands("enmity",e)}try{prepareWebsocket(),prepareApi(),applyPatches(),prepareCommands()}catch(e){console.error(e)}
