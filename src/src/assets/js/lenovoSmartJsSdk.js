/**
 * Created by FengChen.
 */
//  定义命名空间 LenSmJs
var LenSmJs = new Object();
//the judgment is ios or Android？
var LenSmJsU = navigator.userAgent;
LenSmJs.isAndroid = LenSmJsU.indexOf('Android') > -1 || LenSmJsU.indexOf('Adr') > -1; //android终端
LenSmJs.isiOS = !!LenSmJsU.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(LenSmJs.isiOS == true){
     //ios终端
}
if(LenSmJs.isAndroid == true){
     //android终端
}
LenSmJs.h5log = function(log){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.H5_Log(log);
    }else{
        console.log(log);
    }
};


//安卓打log接口



/**
 *  0.1、回调方法
 *  参数：设备号：id ；
 *     name：请求app后返回的最近一次请求的方法的方法名去掉“_h5”的字符串.
 *     例如：获取设备列表的方法是 getGadgets_h5 ，则此方法的回调方法中的name即时“getGadgets”；
 *     返回数据：data
 *
 *     ps:这个方法是回调的方法，页面不需要调用，但是要注册。
 *
 */

//function callbackdata(id,name,data){
//
//}


/**
 *  0.2、获取设备号
 *  字符串截取获取 gadget_id
 *  返回值：gadgetId
 */
LenSmJs.gadgetId_h5 = function(){
    //字符串截取获取 gadget_id;
    //例如：var href = 'http://html.zai0312.com/cs.html?gadget_id=298892786ushuihvu19288988';
    var href = location.href;
    var gadgetId = href.split("gadget_id=")[1];
    var andpos;
    try
    {
        //在这里运行代码
        andpos = gadgetId.indexOf("&");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(andpos){
        if(andpos >= 0){
            gadgetId = gadgetId.split("&")[0];
        }
    }

    var jingpos;
    try
    {
        //在这里运行代码
        jingpos = gadgetId.indexOf("#");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(jingpos){
        if(jingpos >= 0){
            gadgetId = gadgetId.split("#")[0];
        }
    }

    return gadgetId;
};

/**
 *  0.2、获取设备号
 *  字符串截取获取 gadget_id
 *  返回值：gadgetId
 */
LenSmJs.hubId_h5 = function(){
    //字符串截取获取 gadget_id;
    //例如：var href = 'http://html.zai0312.com/cs.html?hub_id=298892786ushuihvu19288988';
    var href = location.href;
    var hubId = href.split("hub_id=")[1];
    var andpos;
    try
    {
        //在这里运行代码
        andpos = hubId.indexOf("&");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(andpos){
        if(andpos >= 0){
            hubId = hubId.split("&")[0];
        }
    }

    var jingpos;
    try
    {
        //在这里运行代码
        jingpos = hubId.indexOf("#");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(jingpos){
        if(jingpos >= 0){
            hubId = hubId.split("#")[0];
        }
    }

    return hubId;
};
/**
 *  获取设备号
 *  字符串截取获取 gadgetTypeId
 *  返回值：gadgetTypeId
 */
LenSmJs.gadgetTypeId_h5 = function(){
    //字符串截取获取 gadget_type_id;
    //例如：var href = 'http://html.zai0312.com/cs.html?gadget_type_id=203';
    var href = location.href;
    var gadgetTypeId = href.split("gadget_type_id=")[1];
    var andpos;
    try
    {
        //在这里运行代码
        andpos = gadgetTypeId.indexOf("&");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(andpos){
        if(andpos >= 0){
            gadgetTypeId = gadgetTypeId.split("&")[0];
        }
    }

    var jingpos;
    try
    {
        //在这里运行代码
        jingpos = gadgetTypeId.indexOf("#");
    }
    catch(err)
    {
        //在这里处理错误
    }

    if(jingpos){
        if(jingpos >= 0){
            gadgetTypeId = gadgetTypeId.split("#")[0];
        }
    }

    return gadgetTypeId;
};


/**
 * 0.3  Android 储存gardetid
 * gadgetId:设备号
 * ps:进入页面时，给app传递一个设备号，以便于app其他接口使用：
 *
 */
LenSmJs.saveGadgetId_h5 = function(gadgetId){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.SaveGadgetId(gadgetId);
    }
};

/**
 * 0.4 Android 注册监听回调
 * 用到监听时，先在页面注册此方法
 *
 *
 */
LenSmJs.getAddListener_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.getAddListener();
    }

};

/**
 * 0.5 Android 移除监听：
 *
 */
LenSmJs.getRemoveListener_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.getRemoveListener();
    }

};
/**
 * 0.6 Android 定时器：
 * time:执行时间（毫秒）
 * key:传啥返啥
 * 接收方法name timingDevice;
 * 返回值：{"key":""}
 */
LenSmJs.timingDevice_h5 = function(time,key){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.timingDevice(time,key);
    }else{

    }
};

/**
 * 1、从h5页面跳转至native页面
 * toPage:要跳转到的位置
 *      set : 		设置
        home :		app首页
        QuipmentList :	设备列表
 *      Ps:具体跳转app界面参数，待定。
 */
LenSmJs.HtmlJumpApp_h5 = function(toPage){
    if(LenSmJs.isiOS == true){
        HtmlJumpApp(toPage);
    }else{
        JsInterface.HtmlJumpApp(toPage);
    }
};
/**
 * 40 finish：，直接粉碎页面，进入到app里面
 *
 */
LenSmJs.initFinish_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.initFinish();
    }else{
        homeback();
    }
};

/**
 *  4、监听属性变化回调
 *  通过0.1 callbackdata(id,name,data) 方法进行的回调
 *  其中name为BackExcuteList
 *
 *  ps:app监听到属性变化时，主动调用，页面需要注册
 */


/**
 *  5、存储账号密码
 *
 *  remCount：账号
 *  remPass：密码
 */
LenSmJs.SaveSSIDAndPwd_h5 = function(remCount,remPass){
    if(LenSmJs.isiOS == true){
        SaveSSIDAndPwd("ssid="+remCount,"pwd="+remPass);
    }else{
        JsInterface.SaveSSIDAndPwd(remCount,remPass);
    }
};
LenSmJs.saveSSIDInfoList_h5 = function(ssid, pwd) {
  if(LenSmJs.isiOS == true){
    saveSSIDInfoList("ssid="+ssid,"pwd="+pwd);
  }else{
    JsInterface.saveSSIDInfoList(ssid,pwd);
  }
}
/**
 *  6、读取账号密码
 *
 *  remCount：账号
 *  remPass：密码
 *  返回值：
         类型：json
         示例：{“ssid":"wifiName","pwd":"123456"}
 */
LenSmJs.ReadSSIDAndPwd_h5 = function(){
    if(LenSmJs.isiOS == true){
        ReadSSIDAndPwd();
    }else{
        JsInterface.ReadSSIDAndPwd();
    }
};
// {state:1 code:200, value: '12345678'}
LenSmJs.getPWDWithSSID_h5 = function(ssid){
  if(LenSmJs.isiOS == true){
    getPWDWithSSID("ssid="+ssid);
  }else{
    JsInterface.getPWDWithSSID(ssid);
  }
};

/**
 *  7、获取设备的在线状态（网络）
 *
 *返回值：
 *{"state":0}
 * 字符串
 *data.state ：0 离线； 1 在线
 *
 */
LenSmJs.GetGadgetState_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetState();
    }else{
        JsInterface.GetGadgetState();
    }
};



/**
 *  8、监听并设置设备在线/离线状态
 *
 *  通过0.1 callbackdata(id,name,data)方法进行的回调
 *  其中name为 GetGadgetState
 *  返回值：
 * {"state":0}
 * 字符串：
 * data.state ：0 离线； 1 在线
 *
 *  ps:app监听到属性变化时，主动调用，页面需要注册
 *
 */

/**
 * 9、根据gadgetId请求获取gadget的所有属性信息
 *
 * 返回值：通过0.1 callbackdata(id,name,data)方法进行的回调
 * 回调name : FindGadgetById
 *
 */

LenSmJs.FindGadgetById_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        FindGadgetById("gadgetId="+gadgetId);
    }else{
        JsInterface.FindGadgetById(gadgetId);
    }
};

/**
 * 10、属性操作方法：设置修改属性值
 *
 * (1)单属性操作方法
 *
 * PS：操作成功之后，是通过4监听属性变化，来回调的。
 */

LenSmJs.ExcuteAction_h5 = function(gadgetId, actionId,value){
    if(LenSmJs.isiOS == true){
        ExcuteAction("actionId="+actionId,"value="+value);
    }else{
        JsInterface.ExcuteAction(gadgetId, actionId,value);
    }
};

/**
 * (2) 多值属性操作方法：设置修改属性值,多值时候的数组传递
 *
 * value:是一个数组；要实例化为json后作为参数传递
 * 其中数组中各项必须是string类型
 * PS：操作成功之后，是通过4监听属性变化，来回调的。
 * value:是一个数组；要实例化为json后作为参数传递，其中数组中各项必须是string类型。
 例如：
 设置净化器pm2.5监测的时间范围的开始结束时间：
 var stime = 8*60;
 var etime = 12*60;

 var arr = new Array();
 arr[0] = stime.toString();
 arr[1] = etime .toString();
 arr = JSON.stringify(arr);
 LenSmJs.excuteActionWithParams_h5(gadgetId,"0x00090014",arr);
 */

LenSmJs.excuteActionWithParams_h5 = function(gadgetId, actionId,value){
    if(LenSmJs.isiOS == true){
        excuteActionWithParams("actionId="+actionId,"value="+value);
    }else{
        JsInterface.excuteActionWithParams(gadgetId, actionId,value);
    }
};


/**
 * 11、根据设备id和属性id 获取值
 *
 *回调方法：
 通过0.1方法callbackdata(id,name,data)回调
 回调name : GetAttrDiscriptionByAttrId
 返回数据：
 多值：{"value":["2907","3000"],"attribute_id":"0x0009000b"}
 单值：{"value":"1","attribute_id":"0x0009000b"}
 */

LenSmJs.GetAttrDiscriptionByAttrId_h5 = function(gadgetId, actionId){
    if(LenSmJs.isiOS == true){
        GetAttrDiscriptionByAttrId("gadgetId="+gadgetId,"actionId="+actionId);
    }else{
        JsInterface.GetAttrDiscriptionByAttrId(gadgetId,actionId);
    }
};

/**
 * 12、根据gadgetId获取设备信息,包含设备名，信息状态等，
 *
 *回调方法：0.1方法callbackdata(id,name,data)
 其中回调name : GetGagdgetInfoWithId;
 返回数据：
data.gadget_name; //设备名字
data.room_id;	//room id
data.client_data;	//client_data
data.push_msg_flag; //是否要推送信息
推送消息判断，
 data.push_msg_flag;当为1 或者 true时，为打开消息，反之 为关闭消息
 PS:
 data.push_msg_flag
 IOS是  string  0 关闭 1  打开
 Android 是  布尔类型  false 关闭 true  打开
 */

LenSmJs.GetGagdgetInfoWithId_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        GetGagdgetInfoWithId("gadget_id="+gadgetId);
    }else{
        JsInterface.GetGagdgetInfoWithId(gadgetId);
    }
};

/**
 * 13、修改设备信息
 * 参数同  方法 12
 *
 * 回调方法：通过方法0.1callbackdata(id,name,data)
 其中name : ModifyGagdgetInfoWithId;
 返回值：
 {“state”:”0”key)}
 state 字符串  0 失败 1 成功；
 key : 传什么返回什么，以便于区分究竟是修改了哪个信息的返回结果
 */
LenSmJs.ModifyGagdgetInfoWithId_h5 = function(gadgetId, gadgetName, roomId, clientData, push_msg_flag,key){
    if(LenSmJs.isiOS == true){
        ModifyGagdgetInfoWithId("gadgetId="+gadgetId,"gadgetName="+gadgetName,"roomId="+roomId,"clientData="+clientData,"push_msg_flag="+push_msg_flag,"key="+key);
    }else{
        JsInterface.ModifyGagdgetInfoWithId(gadgetId, gadgetName, roomId, clientData, push_msg_flag,key);
    }
};


/**
 * 14、获取房间列表
 *
 * 回调方法：通过0.1方法callbackdata(id,name,data)
 其中name : QueryDataHomeAndRoomList;
 返回值：
 [{"room_id":"12","home_id":"12","room_name":"厨房"},{"room_id":"13","home_id":"12","room_name":"卧室"}]
 */
 LenSmJs.QueryDataHomeAndRoomList_h5 = function(){
    if(LenSmJs.isiOS == true){
        QueryDataHomeAndRoomList();
    }else{
        JsInterface.QueryDataHomeAndRoomList();
    }
};

/**
 * 15、删除房间
 *
 * rome_id ：房间号
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : DeleteRomeWithRomeid;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.DeleteRomeWithRomeid_h5 = function(rome_id){
    if(LenSmJs.isiOS == true){
        DeleteRomeWithRomeid("rome_id="+rome_id);
    }else{
        JsInterface.DeleteRomeWithRomeid(rome_id);
    }
};

/**
 * 16、创建房间
 *
 * room_name ：房间名
 * homeId：home id
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : AddRoomWithName;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.AddRoomWithName_h5 = function(room_name,homeId){
    if(LenSmJs.isiOS == true){
        AddRoomWithName("room_name="+room_name,"homeId="+homeId);
    }else{
        JsInterface.AddRoomWithName(room_name, homeId);
    }
};
















/**
 * 通过id获取room信息
 *
 * 回调方法：通过0.1方法callbackdata(id,name,data)
 */
 LenSmJs.DataPoolroomInfoById_h5 = function(room_id){
    if(LenSmJs.isiOS == true){
        DataPoolroomInfoById("room_id="+room_id);
    }else{
        JsInterface.DataPoolroomInfoById(room_id);
    }
};


/**
 * 17、解除hub绑定
 *
 *  itemType："ITEM_TYPE_HUB"，固定值
 *             hubid：hubid。
 *
 * 回调方法：通过0.1 方法callbackdata(id,name,data)
 其中name : UnbindHub;
 返回值：
 {“state”:”0”}
 字符串  0 失败 1 成功；
 */
LenSmJs.UnbindHub_h5 = function(itemType, hubId){
    if(LenSmJs.isiOS == true){
        UnbindHub("hubId="+hubId);
    }else{
        JsInterface.UnbindHub(itemType, hubId);
    }
};

/**
 * 20、Android设备绑定
 *
 * 参数：
 * var gadgetKinds string  //空气净化器的是“LenovoSmartAir”
 var ssid = remCount; //账号
 var psd = remPass;   //密码
 var ls = "cn";      //服务器
 var sl = "dev";     //服务器级别
 var perCode = "";
 var timeZone = LenSmJs.getTimezoneName_h5();    //本地时区
 var cn = "false";    //网络配置流程+绑定流程
 var wctom = "60000";    //wifi连接超时时间
 var stom = "60000";     //softAp超时时间
 var btom = "120000";    //绑定超时时间
 var cgtom = "120000";   //创建设备超时时间
 var ip = "192.168.199.1"  固定
 var commongadget = "true"  固定

 返回：是通过 0.1 方法返回的，
 其中每一步返回的name，及结果是：
 //andriod 返回 start
 if(name == "onDeviceWifiConnectSuccess"){
          //设备wiif连接成功
  }
 if(name == "onDeviceWifiConnectTimeout"){
           //设备wifi连接超时
}
 if(name == "onSoftApSuccess"){
           //softAp成功
}
 if(name == "onSoftApTimeout"){
           //softAp超时
}
 if(name == "onBindSuccess"){
           //绑定成功
}
 if(name == "onBindError"){
           //绑定失败
           if(data == "103" || data == "-8" || data == "42409" ){
               //失败 提示被其他用户绑定
           }else{
               //绑定超时
           }
}
 if(name == "onCreateGadgetSuccess"){
           //创建设备成功
           返回结果：
            字符串，逗号“,”分割:第一个是状态值，第二个是设备名字，第三个是设备id
           var gadgetName = data.split(",")[1];  ：设备名字
           var gadgetId = data.split(",")[2];   :设备号
}
 if(name == "onCreateGadgetTimeout"){
           //创建设备超时
}
 *
 * */
//第一步 注册监听：
//LenSmJs.getAddListener_h5();
//第二步 开始绑定
LenSmJs.startAutoFindDeviceBySoftAp_h5 = function(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget){
    if(LenSmJs.isAndroid == true){
        JsInterface.startAutoFindDeviceBySoftAp(gadgetKinds,ssid, psd, ip, ls, sl, perCode, timeZone, cn, wctom, stom, btom, cgtom, commongadget);
    }
};

/**
 *  第三步 Android停止自动发现设备接口（用户点击左上角返回键或者系统返回键调用）
 */
LenSmJs.stopAutoFindDevice_h5 = function(){
    if(LenSmJs.isAndroid == true){
        JsInterface.stopAutoFindDevice();
    }
};
/**
 *  局域网内发现设备
 *  有建权
 */
LenSmJs.ethernetFindHub_h5 = function(preCode){
    if(LenSmJs.isiOS == true) {
        ethernetFindHub("pre_code="+preCode);
    }else{
        JsInterface.ethernetFindHub(preCode);
    }
};

/**
 *  局域网内发现设备
 *  无建权
 */
LenSmJs.ethernetFindHubWithoutAuth_h5 = function(){
    if(LenSmJs.isiOS == true) {
        ethernetFindHubWithoutAuth();
    }else{
        JsInterface.ethernetFindHubWithoutAuth();
    }
};

/**
 *  停止 局域网内发现设备
 */
LenSmJs.stopEthernetFindHub_h5 = function(){
    if(LenSmJs.isiOS == true) {
        stopEthernetFindHub();
    }else{
        JsInterface.stopEthernetFindHub();
    }
};
/**
 * 21、IOS设备绑定
 * var wifi_nowDate = Date.parse(new Date())/1000;  时间 时间戳 单位秒
 var wifi_nowTimeZone = LenSmJs.getTimezoneName_h5();          时区 通过getTimezoneName()；获取
 wifi_name：wifi名字
 wifi_passWord：wifi密码
 第一步：softAPNew方法
 通过第一步返回数据，能够获取到：
 返回json，
 data.state 为 true 成功，false 失败
 Ghubtype:hub type
 Gmacaddr: mac地址
 获取方式：
 Ghubtype = data.hubtype;
 Gmacaddr = data.macaddr;
 第二步：bindHub方法
 返回json，
 data.state 为 true 成功，false 失败

 第三步：updateGadgetListWithResultBlock方法
 返回json，
 data.state 为 true 成功，false 失败
 *
 * */
//ios第一步： softAp绑定：
LenSmJs.softAPNew_h5 = function(wifi_name, wifi_passWord, wifi_nowDate, wifi_nowTimeZone){
    if(LenSmJs.isiOS == true) {
        softAPNew("wifi_name="+wifi_name,"wifi_passWord="+wifi_passWord,"wifi_nowDate="+wifi_nowDate,"wifi_nowTimeZone="+wifi_nowTimeZone);
    }
};

//ios第二步：绑定Hub：
LenSmJs.bindHub_h5 = function(Gmacaddr, Ghubtype){
    if(LenSmJs.isiOS == true) {
        bindHub("macaddr="+Gmacaddr,"hubtype="+Ghubtype);
    }
};
    /**
     * 绑定hub 没有建权流程
     * @param mac
     * @param hubType
     */
LenSmJs.bindHubRequest_h5 = function(Gmacaddr,Ghubtype){
    if(LenSmJs.isiOS == true) {
        bindHubRequest("macaddr="+Gmacaddr,"hubtype="+Ghubtype);
    }else{
        JsInterface.bindHubRequest(Gmacaddr,Ghubtype);
    }
};

//ios第三步：获取设备列表：
LenSmJs.updateGadgetListWithResultBlock_h5 = function(macaddr){
    if(LenSmJs.isiOS == true) {
        updateGadgetListWithResultBlock("macaddr="+macaddr);
    }else{
        JsInterface.updateGadgetListWithResultBlock(macaddr);
    }
};
    /**
     * 向云端声明设备 执行建权操作
     * @param mac
     * @param hubType
     * @param codeChallenge
     * @param preCode
     */
LenSmJs.declaringDevice_h5 = function(mac,hubType,codeChallenge,preCode){
    if(LenSmJs.isiOS == true) {
        declaringDevice("mac="+mac,"hub_type="+hubType,"pre_code="+preCode,"code_challenge="+codeChallenge)
    }else{
     JsInterface.declaringDevice(mac,hubType,codeChallenge,preCode);
    }
};
    /**
     * 获取云端建权状态
     * @param preAuthCode
     */
LenSmJs.getDeviceAuthorizationStatus_h5 = function(preAuthCode){
    if(LenSmJs.isiOS == true) {
        getDeviceAuthorizationStatus("preAuthCode="+preAuthCode);
    }else{
     JsInterface.getDeviceAuthorizationStatus(preAuthCode);
    }
};

/**
 * 22、 获取所有home信息（本地）
 * //获取所有家庭home列表
 *
 * 返回数据：homeid  homename
 * 返回值格式：[{“home_id”:”01ac43921e67e768c66f0670fc58061d”,”home_name”:”家庭1”},{“home_id”:”123456”,”home_name”:”家庭1”}]
 */


LenSmJs.GetHomeList_h5 = function(){
    if(LenSmJs.isiOS == true) {
        GetHomeList();
    }else{
        JsInterface.GetHomeList();
    }
};




/**
 * 23、  版本更新：获取版本号，根据新旧版本号是否一致，来判断是否是新版本
 * 返回值：
 * {"state":"0","code":"aaa","version":"abcdefghi","os_version":"123","image_version":"3456"}
 * state： 字符串 0 成功 ； 1  失败
 *
 * 参数：对于空气净化器是固定值
 * gadgetTypeId:1000110
 * ms:Mainstream
 * version:当前版本号
 */

LenSmJs.GetEquipmentVersion_h5 = function(gadgetTypeId,ms){
    if(LenSmJs.isiOS == true) {
        GetEquipmentVersion("gadget_type_id="+gadgetTypeId,"Mainstream="+ms);
    }else{
        JsInterface.GetEquipmentVersion(gadgetTypeId,ms);
    }
};

/**
 * 24、  获取当前连接的wifi的名字
 * 返回值：
 *  string "wifiName"
 *  ps：返回值是获取到的经过base64加密wifi名字；所以需要先解密，再使用；
 *
 */

LenSmJs.GetWifiName_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetWifiName();
    }else{
        JsInterface.GetWifiName();
    }
};

/**
 * 26、 获取支持型号列表
 * 返回值：
 * state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */
LenSmJs.GetGadgetTypeList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetTypeList();
    }else{
        JsInterface.GetGadgetTypeList();
    }
};

/**
 * 28、取所有的gadget列表, 本地获取
 *
 *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 *
 */
LenSmJs.GetGadgetsList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetGadgetsList();
    }else{
        JsInterface.GetGadgetsList();
    }
};

/**
 * 29.0、根据设备Id获取设备类型（型号）
 * 这个是设备固有属性，不能改变的
 *  返回值：
 * {"gadgetTypeid":" 100 "，"name":"联想智能空净","tag":"联想智能空净"}
 */
LenSmJs.GadgetTypeDescriptionWithGadgetID_h5 = function(gadgetId){
    if(LenSmJs.isiOS == true){
        GadgetTypeDescriptionWithGadgetID("gadget_id="+gadgetId);
    }else{
        JsInterface.GadgetTypeDescriptionWithGadgetID(gadgetId);
    }
};

/**
 * 29、通过单个的gadgetTypeId获取一个类型描述
 *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */
LenSmJs.GadgetTypeDescriptionWithTypeId_h5 = function(gadgetTypeId){
    if(LenSmJs.isiOS == true){
        GadgetTypeDescriptionWithTypeId("gadgetTypeId="+gadgetTypeId);
    }else{
        JsInterface.GadgetTypeDescriptionWithTypeId(gadgetTypeId);
    }
};

/**
 * 30、删除gadget
 *
 *  *  返回值：
 *  state,code
 * {"state":"1","code":"123"}
 */
LenSmJs.DeleteGadget_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        DeleteGadget("gadget_id="+gadget_id);
    }else{
        JsInterface.DeleteGadget(gadget_id,"ITEM_TYPE_GADGET");
    }
};

/**
 * 31、获取单个gadget的历史记录详情
 *
 * 参数：
 * starttime：默认给空字符串， 刷新更多时，给上次取到的最后一条数据的时间
 *  *  gadgetId:设备号
 *  attributeIds：属性id  可以为空""
 *  startTime：起始时间 可以为空""
 *  endTime：结束时间  可以为空""
 *  num：条数  可以为空""
 *  *  返回值：
 *  state,code,value(数组json)
 * {"state":"1","code":"123","value":[a,b,c]}
 */

LenSmJs.GetGadgetHistoryDetDataWithId_h5 = function(gadget_id,attributeIds, startTime, endTime, num){
    if(LenSmJs.isiOS == true){
        GetGadgetHistoryDetDataWithId("gadget_id="+gadget_id,"attributeIds="+attributeIds,"startTime="+startTime, "endTime="+endTime, "num="+num);
    }else{
        JsInterface.GetGadgetHistoryDetDataWithId(gadget_id,attributeIds, startTime, endTime, num);
    }
};
//type: "gadget"
//kind: "h5"
//params: null
LenSmJs.GetGadgetHistoryDetailListWithId_h5 = function(gadget_id,num,starttime,endtime,type,params,kind){
    if(LenSmJs.isiOS == true){
        GetGadgetHistoryDetailListWithId("gadget_id="+gadget_id,"num="+num,"starttime="+starttime, "endtime="+endtime, "type="+type,"params="+params,"kind="+kind);
    }else{
        JsInterface.GetGadgetHistoryDetailListWithId(gadget_id,num,starttime,endtime,type,params,kind);
    }
}


/**
 * 32、创建Home
 * 参数：
 *home_name
 *返回值：
 * state,code,value(home_name,home_id)
 */
LenSmJs.AddHomeWithName_h5 = function(home_name){
    if(LenSmJs.isiOS == true){
        AddHomeWithName("home_name="+home_name);
    }else{
        JsInterface.AddHomeWithName(home_name);
    }
};

/**
 * 33、修改Home
 *
 * 返回值：
 * IOS:
 * state,code(android 有value(home_name,home_id))
 * Android:
 * state,code,value(json)
 *
 */
LenSmJs.ModifyHomeWithHomeid_h5 = function(home_id,home_name){
    if(LenSmJs.isiOS == true){
        ModifyHomeWithHomeid("home_id="+home_id,"home_name="+home_name);
    }else{
        JsInterface.ModifyHomeWithHomeid(home_id,home_name);
    }
};

/**
 * 34、删除Home
 *
 * home_id（android参数两个--》 ITEM_TYPE_HOME 固定值写死 ，homeId
 * 返回值：
 * {"state":"1","code":"123456"}
 */
LenSmJs.DeleteHomeWithHomeid_h5 = function(home_id){
    if(LenSmJs.isiOS == true){
        DeleteHomeWithHomeid("home_id="+home_id);
    }else{
        JsInterface.DeleteHomeWithHomeid(home_id,"ITEM_TYPE_HOME");
    }
};

/**
 * 35.0创建定时器
 *
 * begin_time:定时器启动时间  格式： h:m ；小时：分钟
 * actionid:设备动作id
 * var param: 数组 例如：actionsId或者attributeId ["0x0009000d","0x0009000f","0x00090010"];
 * gadget_id：设备号
 * week 周几 [1,2,3] 里面是整形
 * name：定时器名字
 * status：状态启用（0）/禁用（1）
 * 一下两个参数是安卓独有的：
 * time_id： 定时器id  ; userId+当前的utc秒
 * class_id：设备类别id   例如空气净化器时"0x0009";
 * 返回值：
 * state,code
 */
LenSmJs.CreateTime_h5 = function(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id){
    if(LenSmJs.isiOS == true){
        CreateTime("begin_time="+begin_time,"actionid="+actionid,"param="+param,"week="+week,"gadget_id="+gadget_id,"name="+name,"status="+status);
    }else{
        JsInterface.CreateTime(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id);
    }
};

/**
 * 35.1 修改定时器
 *
 * begin_time:定时器启动时间  格式： h:m ；小时：分钟
 * actionid:设备动作id
 * var param: 数组 例如：actionsId或者attributeId ["0x0009000d","0x0009000f","0x00090010"];
 * gadget_id：设备号
 * week 周几 [1,2,3] 里面是整形
 * name：定时器名字
 * status：状态启用（0）/禁用（1）
 * 一下两个参数是安卓独有的：
 * time_id： 定时器id ; userId+当前的utc秒
 * class_id：设备类别  例如空气净化器时"0x0009";
 * 返回值：
 * state,code
 */
LenSmJs.ModifyTime_h5 = function(time_id,begin_time,actionid,param,week,gadget_id,name,status,class_id){
    if(LenSmJs.isiOS == true){
        ModifyTime("time_id="+time_id,"begin_time="+begin_time,"actionid="+actionid,"param="+param,"week="+week,"gadget_id="+gadget_id,"name="+name,"status="+status);
    }else{
        JsInterface.ModifyTime(begin_time,actionid,param,week,gadget_id,name,status,time_id,class_id);
    }
};

/**
 * 35、删除定时器
 * * 返回值：
 * {"state":"1","code":"123456"}
 *
 * 参数time_id（android参数两个--》ITEM_TYPE_CLOCK 固定值写死 ，clockId ）
 */
LenSmJs.DeleteTimeWithId_h5 = function(time_id){
    if(LenSmJs.isiOS == true){
        DeleteTimeWithId("time_id="+time_id);
    }else{
        JsInterface.DeleteTimeWithId(time_id,"ITEM_TYPE_CLOCK");
    }
};

/**
 * 36、根据gadgetid获取定时器列表
 *
 *
 * 返回值：
 {
     "state": "1",
     "code": "1",
     "value": [{
         "begin_action": {
             "action_id": "0x0009000f",
             "class_id": "0x0009",
             "gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
             "msg_type": "execute_gadget_action",
             "param": ["0x0009000d", "0x0009000f", "0x00090010"],
             "version": "v1.0.1"
         },
         "begin_time": "12:20",
         "gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
         "name": "我是定时器一",
         "status": "1",
         "time_id": "1bcb1fb73ea35e818842ec0710036d52",
         "week": [5, 6]
     }]
 }

 {"state":"1","value":[{"status":"1","isToday":false,"week":["5"],"weekDay":5,"gadget_id":"ad31ee468cd841e5a3701beb0c08a3ac277e5242","begin_time":"12:20","begin_action":{"param":["589837","589839","589840"],"action_id":"0x0009000f"},"name":"我是定时器一","time_id":"b3d89e7a0b44c9f1058ce3f1003721f8"}],"code":"200"}
 */
LenSmJs.GetTimeListWithGadgetid_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetTimeListWithGadgetid("gadget_id="+gadget_id);
    }else{
        JsInterface.GetTimeListWithGadgetid(gadget_id,"true");
    }
};

/**
 * 37、获取所有的定时器列表
 *
 *
 * 返回值：
 {
	"state": "1",
	"code": "1",
	"value": [{
		"begin_action": {
			"action_id": "0x0009000f",
			"class_id": "0x0009",
			"gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
			"msg_type": "execute_gadget_action",
			"param": ["0x0009000d", "0x0009000f", "0x00090010"],
			"version": "v1.0.1"
		},
		"begin_time": "12:20",
		"gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
		"name": "我是定时器一",
		"status": "1",
		"time_id": "1bcb1fb73ea35e818842ec0710036d52",
		"week": [5, 6]
	}]
}

 {"state":"1","value":[{"status":"1","isToday":false,"week":[5,6],"weekDay":5,"gadget_id":"927756a1d9f90ffbd06ea3c792601e8f","begin_time":"12:20","begin_action":{"param":["0x0009000d","0x0009000f","0x00090010"],"action_id":"0x0009000f","class_id":"0x0009"},"name":"我是定时器一","time_id":"1bcb1fb73ea35e818842ec0710036d52"},{"status":"1","isToday":false,"week":["5"],"weekDay":5,"gadget_id":"ad31ee468cd841e5a3701beb0c08a3ac277e5242","begin_time":"12:20","begin_action":{"param":["589837","589839","589840"],"action_id":"0x0009000f"},"name":"我是定时器一","time_id":"b3d89e7a0b44c9f1058ce3f1003721f8"}],"code":"200"}

 */
LenSmJs.GetTimeList_h5 = function(){
    if(LenSmJs.isiOS == true){
        GetTimeList();
    }else{
        JsInterface.GetTimeList();
    }
};

/**
 * 38、获取单个定时器
 *
 * 返回值：
 {
     "state": "1",
     "code": "1",
     "value":{
         "begin_action": {
             "action_id": "0x0009000f",
             "class_id": "0x0009",
             "gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
             "msg_type": "execute_gadget_action",
             "param": ["0x0009000d", "0x0009000f", "0x00090010"],
             "version": "v1.0.1"
         },
         "begin_time": "12:20",
         "gadget_id": "927756a1d9f90ffbd06ea3c792601e8f",
         "name": "我是定时器一",
         "status": "1",
         "time_id": "1bcb1fb73ea35e818842ec0710036d52",
         "week": [5, 6]
     }
 }
 *
 */
LenSmJs.GetTimerWithId_h5 = function(time_id){
    if(LenSmJs.isiOS == true){
        GetTimerWithId("time_id="+time_id);
    }else{
        JsInterface.GetTimerWithId(time_id);
    }
};


/**
 * 39、启用禁用定时器
 *
 *  *参数：
 * status:0 or 1
 * 返回值：
 * state,code

 */
LenSmJs.SetTimeWithId_h5 = function(time_id,status){
    if(LenSmJs.isiOS == true){
        SetTimeWithId("time_id="+time_id,"status="+status);
    }else{
        JsInterface.SetTimeWithId(time_id,status);
    }
};



/**
 * 41、Android ZigBee配网流程
 *
 */

//第一步 注册监听：
//LenSmJs.getAddListener_h5();

//第二步 发现设备
LenSmJs.gadgetScan_h5 = function(gadgetTypeId){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.gadgetScan(gadgetTypeId);
    }
};


//第三步 等待监听
//这一步是在页面接收监听的不需要主动调用
//CreategetListener;
//返回值为json，里面包含字段
/**
 *
 * private String gadget_id;
 private String gadget_type_id;
 private String hub_id;
 private String room_id;
 private String gadget_name;
 private String user_id;
 private String client_data;
 private boolean push_msg_flag;
 private long time_created;
 private boolean blklist;
 private String gadget_vendor;
 private String gadget_mac;
 private String gadget_info;
 private Object private_data;
 private String member;
 private String defaultName;

 *
 *
 */
//第四步 取消发现设备
//LenSmJs.gadgetCancelScan_h5();

/**
 * 42、IOS ZigBee配网流程
 *
 * gadget_type_id 可传空
 * 返回值：字符串 设备的gadget_id
 */

LenSmJs.StartScanGadgetWithTypeId_h5 = function(gadget_type_id){
    if(LenSmJs.isiOS == true){
        StartScanGadgetWithTypeId("gadget_type_id="+gadget_type_id);
    }
};

/**
* 根据 gadgetTypeId 和 hubIds 扫描对应设备
*/
LenSmJs.StartScanGadgetWithTypeIdAndHubIds_h5 = function(gadget_type_id,hubIds){
    if(LenSmJs.isiOS == true){
        StartScanGadgetWithTypeIds("gadget_type_id="+gadget_type_id,"hubIds="+hubIds);
    }else{
        JsInterface.startScanGadgetWithTypeIdAndHubIds(gadget_type_id,hubIds);
    }
};

/**

//第二步 ：获取设备列表
LenSmJs.updateGadgetListWithResultBlock_h5 = function(macaddr){
    if(LenSmJs.isiOS == true){
        updateGadgetListWithResultBlock("macaddr="+macaddr);
    }
};

//返回值 json
//其中    state true  成功 false 失败

//第三步 取消发现设备
//LenSmJs.gadgetCancelScan_h5();


**/

/**
 * 43、判断当前链接wifi是不是5G;
 *
 * JudgmentWifi5G
 *
 * 返回值：
 *  {state:"1"}
 *  0 不是5G
 *  1 是5G
 *
 */
LenSmJs.JudgmentWifi5G_h5 = function(){
    if(LenSmJs.isiOS == true){
        JudgmentWifi5G();
    }else{
        JsInterface.JudgmentWifi5G();
    }
};

/**
 * 44、取消发现设备
 *
 *
 *
 */
LenSmJs.gadgetCancelScan_h5 = function(){
    if(LenSmJs.isAndroid == true){
        //android终端
        JsInterface.gadgetCancelScan();
    }else {
        gadgetCancelScan();
    }
};


/**
 * 45、获取单个设备的分享码
 *
 * 返回值：
 *  state,code,share_code_ttl,gadget_ids
 *  share_code_ttl:分享码
 *
 */
LenSmJs.GetShareCodeForGadgets_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetShareCodeForGadgets("gadget_id="+gadget_id);
    }else {
        JsInterface.GetShareCodeForGadgets(gadget_id);
    }
};

/**
 * 46、获取分享成员
 *
 * 返回值：
 *  state,code,value(数组)
 *
 */
LenSmJs.GetShareUserArray_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        GetShareUserArray("gadget_id="+gadget_id);
    }else {
        JsInterface.GetShareUserArray(gadget_id);
    }
};

/**
 * 47、删除分享码
 *
 * code：分享码
 * 返回值：
 *  state,code
 *
 */
LenSmJs.DelShareCode_h5 = function(code){
    if(LenSmJs.isiOS == true){
        DelShareCode("code="+code);
    }else {
        JsInterface.DelShareCode(code);
    }
};

/**
 * 48、通过分享码分享设备
 *
 * code：分享码
 * 返回值：
 *  state,code
 *
 */
LenSmJs.ShareGadgetsWithShareCode_h5 = function(code){
    if(LenSmJs.isiOS == true){
        ShareGadgetsWithShareCode("code="+code);
    }else {
        JsInterface.ShareGadgetsWithShareCode(code);
    }
};

/**
 * 分享设备
 *
 * 返回值：
 * 无
 */
LenSmJs.ShareGadgets_h5 = function () {
    if (LenSmJs.isiOS == true) {
        ShareGadgets();
    } else {
        JsInterface.ShareGadgets();
    }
};

/**
 * 49、管理员删除成员
 *
 * userIds：要删除的成员ID以，隔开,例如："aaa,bbbb,ccc"
 * 返回值：
 *  state,code
 *
 */
LenSmJs.DelShareMember_h5 = function(gadget_id,userIds){
    if(LenSmJs.isiOS == true){
        DelShareMember("gadget_id="+gadget_id,"userIds="+userIds);
    }else {
        JsInterface.DelShareMember(	gadget_id,userIds);
    }
};

/**
 * 50、用户主动退出分享
 *
 * 返回值：
 *  state,code
 *
 */
LenSmJs.MemberQuitShare_h5 = function(gadget_id){
    if(LenSmJs.isiOS == true){
        MemberQuitShare("gadget_id="+gadget_id);
    }else {
        JsInterface.MemberQuitShare(gadget_id);
    }
};


/**
 * 51、	获取PM2.5
 *
 * 返回值：
 *  	state,code,value 取值
 *   value的值：{"code":"","text":"","temp":"","city":"","pm2_5":"","condition":""}
 *   code:天气类型；
 *   text:天气类型描述；
 *   temp:温度
 *   city:天气城市
 *   pm2_5:天气质量，pm2.5的值
 *   condition:天气质量描述
 *
 *   例如：  value.pm2_5下面的值 是 当前城市下面的所有pm2.5
 */
LenSmJs.GetPMData_h5 = function(cityname){
    if(LenSmJs.isiOS == true){
        GetPMData("cityname="+cityname);
    }else {
        JsInterface.GetPMData(cityname);
    }
};


/**
 * 52、	获取一段时间内PM2.5
 *
 *
 *    start_time：开始时间：单位为秒
 *    end_time：结束时间：单位为秒
 *    interval：时间间隔：单位为秒
 *    key：传什么反什么
 *  返回值：
 {"state": "1","code": "1","value": "[{"time ":"1540294793 ","value ":"45 "},{"time ":"1540503593 ","value ":"4 "},{"time ":"1540294793 ","value ":"45 "},{"time ":"1540503593 ","value ":"4 "}]","key":"key"}
 *
 */
LenSmJs.GetAllPMData_h5 = function(start_time,end_time,interval,key){
    if(LenSmJs.isiOS == true){
        GetAllPMData("start_time="+start_time,"end_time="+end_time,"interval="+interval,"key="+key);
    }else {
        JsInterface.GetAllPMData(start_time,end_time,interval,key);
    }
};


/**
 *  53、获取某个hubId 下的所有设备
 *  参数hub_id
 *  返回值：json
 [{"room_id":"e95a45ec62245f9c65508d8ced3b8cad","member":"1","gadget_type_id":"100","gadget_classId":"0x0009","user_id":"01ac43921e67e768c66f0670fc58061d","push_msg_flag":"0","gadget_name":"联想","hub_id":"fa43aa084e620789733daa4b9287a184d4add06f","attributes":[{"value":["0"],"attribute_id":"0x0009000d","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x0009000e","attr_time":"1516791897"},{"value":["1"],"attribute_id":"0x0009000f","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x1000000a","attr_time":"1516791897"},{"value":["18"],"attribute_id":"0x10000001","attr_time":"1516791897"},{"value":["1S20171127ABZ1731025"],"attribute_id":"0x10000004","attr_time":"1516791897"},{"value":["D06F4A5C9529"],"attribute_id":"0x1000000c","attr_time":"1516791897"},{"value":["陕西省,渭南市,"],"attribute_id":"0x1000000f","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090011","attr_time":"1516791897"},{"value":["50"],"attribute_id":"0x00090012","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090013","attr_time":"1516791897"},{"value":["360","1440"],"attribute_id":"0x00090014","attr_time":"1516791897"},{"value":["0"],"attribute_id":"0x00090015","attr_time":"1516791897"},{"value":["2"],"attribute_id":"0x0009000a","attr_time":"1516794163"},{"value":["2883","3000"],"attribute_id":"0x0009000b","attr_time":"1516797083"},{"value":["0"],"attribute_id":"0x00090000","attr_time":"1516797124"},{"value":["0"],"attribute_id":"0x0009000c","attr_time":"1516797124"},{"value":["0"],"attribute_id":"0x00090010","attr_time":"1516797124"},{"value":["9"],"attribute_id":"0x00090007","attr_time":"1516804567"}],"isInDirectMode":false,"client_data":"","gadget_id":"ad31ee468cd841e5a3701beb0c08a3ac277e5242","status":"0","memAttr":0}]
 */

LenSmJs.GetAllGadgetsWithHudId_h5 = function(hub_id){
    if(LenSmJs.isiOS == true){
        GetAllGadgetsWithHudId("hub_id="+hub_id);
    }else {
        JsInterface.GetAllGadgetsWithHudId(hub_id);
    }
};

/**
 * 54、获取自己的用户信息（本地）
 *
 * DataPoolgetMyUserInfo
 * 返回数据：
 * {"user_id":"","user_name":"","nick_name":"","img_url":""}
 * user_id：用户唯一表示，用户id
 user_name：用户名
 nick_name：昵称
 img_url：头像url
 */

LenSmJs.DataPoolgetMyUserInfo_h5 = function(){
    if(LenSmJs.isiOS == true){
        DataPoolgetMyUserInfo();
    }else {
        JsInterface.DataPoolgetMyUserInfo();
    }
};

/**
 * 55、获取当前账号下所有设备（网络）
 *
 * boolean force：是否强制更新数据，不强制从本地获取，强制true，不强制false
 */

LenSmJs.gadgetListAll_h5 = function(force){
    if(LenSmJs.isiOS == true){
        //gadgetListAll(force);
    }else {
        JsInterface.gadgetListAll(force);
    }
};

/**
 * 56、获取wifi列表接口
 *
 * name:GetWifiList
 * 返回数据：
 * {"state":"1","code":"1","value":[{"ssid":"wifiname1"},{"ssid":"wifiname2"},{"ssid":"wifiname3"}]}
 * value：2.4GHZ的wifi列表
 */

LenSmJs.GetWifiList_h5 = function(){
    if(LenSmJs.isiOS == true){
        //GetWifiList();
    }else {
        JsInterface.GetWifiList();
    }
};

/**
 * 57、跳转到系统wifi设置页面接口
 *
 * name：StartWifiSettingActivity
 * 返回数据：
 * {"state":"1"}
 */

LenSmJs.StartWifiSettingActivity_h5 = function(){
    if(LenSmJs.isiOS == true){
        StartWifiSettingActivity();
    }else {
        JsInterface.StartWifiSettingActivity();
    }
};

//蓝牙相关
/**
 * 蓝牙是否可用
 */
LenSmJs.isBluetoothAvliable_h5 = function(){
    if( LenSmJs.isiOS == true ){
        isBluetoothAvliable();
    }else{
        JsInterface.isBluetoothAvliable();
    }
}
/**
 * 获取蓝牙电量
 */
LenSmJs.getBluetoothDoorBattery_h5 = function(address){
    if( LenSmJs.isiOS == true ){
        getBluetoothDoorBattery();
    }else{
        JsInterface.getBluetoothDoorBattery(address);
    }
}



/**
 * 开始蓝牙搜索
 * 通过onLeScan回调
 */
/*{ state:
  code:
    value:{
      name: ''，
    address：''
    }
}*/
LenSmJs.startLeScan_h5 = function(){
    if( LenSmJs.isiOS == true ){
         startLeScan();
    }else{
         JsInterface.startLeScan();
    }
}
LenSmJs.getGadgetFunction_h5 = function(function_key,condition){
    if( LenSmJs.isiOS == true ){
        getGadgetFunction("function_key="+function_key,"condition="+condition);
    }else{
        JsInterface.getGadgetFunction(function_key,condition);
    }
}

LenSmJs.deleteGadgetFunction_h5 = function(function_key,condition){
    if( LenSmJs.isiOS == true ){
        deleteGadgetFunction("function_key="+function_key,"condition="+condition);
    }else{
        JsInterface.deleteGadgetFunction(function_key,condition);
    }
}

/**
 * 停止蓝牙搜索
 */
LenSmJs.stopLeScan_h5 = function(){
    if( LenSmJs.isiOS == true ){
         stopLeScan();
    }else{
         JsInterface.stopLeScan();
    }
}
/**
 * 连接蓝牙设备
 */
LenSmJs.connectPeripheral_h5 = function(address,gadgetTypeId){
    if( LenSmJs.isiOS == true ){
        connectPeripheral("address="+address,"gadgetTypeId="+gadgetTypeId);
    }else{
        JsInterface.connectPeripheral(address,gadgetTypeId);
    }
}
/**
* 断开蓝牙设备
*/
LenSmJs.disconnectPeripheral_h5 = function(address){
     if( LenSmJs.isiOS == true ){
         disconnectPeripheral();
     }else{
         JsInterface.disconnectPeripheral(address);
     }
}

/**
* 蓝牙开锁
* address mac 地址
* pwd     开锁密码
*/
LenSmJs.unLockBluetoothDoor_h5 = function(address,pwd){
     if( LenSmJs.isiOS == true ){
         unLockBluetoothDoor("address="+address,"pwd="+pwd);
     }else{
         JsInterface.unLockBluetoothDoor(address,pwd);
     }
}
 /**
      * 获取蓝牙开锁历史记录
      * @param startTime 开始时间
      * @param endTime 结束时间
      * @param num 最大条数200
      */
LenSmJs.getBluetoothUnLockHistory_h5 = function(startTime, endTime, num) {
  if( LenSmJs.isiOS == true ){
    getBluetoothUnLockHistory(
      'start_time='+startTime,
      'end_time='+endTime,
      'num='+num
    );
  }else{
    JsInterface.getBluetoothUnLockHistory(startTime, endTime, num);
  }
}

/**
* 根据设备类别id获取设备商品信息
* gadgetId：设备id
*/
LenSmJs.getGadgetTypeVersion_h5 = function(gadgetTypeId,model){
    if( LenSmJs.isiOS == true ){
        getGadgetTypeVersion("gadgetTypeId="+gadgetTypeId,"model="+model);
    }else{
        JsInterface.getGadgetTypeVersion(gadgetTypeId,model);
    }
}

/**
 *  根据hub_id获取本地hub信息
 */
LenSmJs.getHubInfoWithId_h5 = function(hub_id){
    if( LenSmJs.isiOS == true ){
        getHubInfoWithId("hub_id="+hub_id);
    }else{
        JsInterface.getHubInfoWithId(hub_id);
    }
}

//通过hubid修改hubinfo
LenSmJs.modifyHubInfoWithId_h5 = function(hub_id,hub_name,room_id,home_id){
if( LenSmJs.isiOS == true ){
        modifyHubInfoWithId("hub_id="+hub_id,"hub_name="+hub_name,"room_id="+room_id,"home_id="+home_id);
    }else{
        JsInterface.modifyHubInfoWithId(hub_id,hub_name,room_id,home_id);
    }
}

/**
 *  根据hub_id获取本地hub信息
 *  type: hub or gaddet
 *  id: gagdet_id or hub_id
 *  callbackdata: HtmlJumpHtml 如果返回错误信息进行提示 ，如果返回NULL/空串 则不用处理
 */
LenSmJs.HtmlJumpHtml_h5 = function(type,id){
    if( LenSmJs.isiOS == true ){
        HtmlJumpHtml("type="+type,"id="+id);
    }else{
        JsInterface.HtmlJumpHtml(type,id);
    }
}
//***************设备 相关接口
/**
* 批量删除设备
* List<BatchRemoveRequest> ：
* BatchRemoveRequest
* dataType：
* BatchRemoveRequest.REMOVE_DATA_TYPE_HUB解绑hub
* BatchRemoveRequest.REMOVE_DATA_TYPE_GADGET删除设备
* Id：对应的hubId或gadgetId
*/
LenSmJs.deleteGadgetBatch_h5 = function(requests){
    if( LenSmJs.isiOS == true ){
        deleteGadgetBatch("requests="+requests);
    }else{
        JsInterface.deleteGadgetBatch(requests);
    }
}


/**
     *
     * 设置设备功能的通用接口
     *
     * @param function_key  0x10000002  //ota 升级 当前为固定值
     * @param to 1通知手机，2通知 hub，0不通知，3都通知。但默认通知手机和hub(没有
     * @param data 需要与function_key值进行对应
     *   {
     *      "hub_type": "xxx",
     *      "hub_id": "7bb9e8a3da295f0d9202db371851c338ea7c3255",
     *      "status": "0", //0不升级 1:通知升级
     *      "ext": [ ]
     *   }
     *
     */
LenSmJs.setGadgetFunction_h5 = function(function_key,to,data){
    if( LenSmJs.isiOS == true ){
        setGadgetFunction("function_key="+function_key,"to="+to,"data="+data);
    }else{
        JsInterface.setGadgetFunction(function_key,to,data);
    }
}

/**
* pc 定位接口
*/
LenSmJs.getPcLocationForJs_h5 = function(hub_id){
    if( LenSmJs.isiOS == true ){
        getPcLocationForJs("hub_id="+hub_id);
    }else{
        JsInterface.getPcLocationForJs(hub_id);
    }
}

/**
*  虚拟hub 创建/绑定 设备
*/
LenSmJs.miniHubCreateGadget_h5 = function(mac,gadgetTypeid,vendor){
    if( LenSmJs.isiOS == true ){
        miniHubCreateGadget("mac="+mac,"gadgetTypeid="+gadgetTypeid,"vendor="+vendor);
    }else{
        JsInterface.miniHubCreateGadget(mac,gadgetTypeid,vendor);
    }
}
/**
* 更新虚拟hub 上的设备属性
*/
LenSmJs.miniHubUpdateGadgetAttr_h5 = function(gadget_name,gadgetId,gadgetTypeId,attributes){
    if( LenSmJs.isiOS == true ){
        miniHubUpdateGadgetAttr("gadget_name="+gadget_name,"gadgetId="+gadgetId,"gadgetTypeId="+gadgetTypeId,"attributes="+attributes);
    }else{
        JsInterface.miniHubUpdateGadgetAttr(gadgetId,gadgetTypeId,attributes);
    }
}
/**
* 更新hub 上的设备是否在线
*/
LenSmJs.miniHubUpdateOnlineStatus_h5 = function(gadgetId,status){
    if( LenSmJs.isiOS == true ){
        miniHubUpdateOnlineStatus("gadgetId="+gadgetId,"status="+status);
    }else{
        JsInterface.miniHubUpdateOnlineStatus(gadgetId,status);
    }
}


/**
* 根据gadget的ID和属性查看设备数据
* @param gadget_id 设备id
* @param gadget_type_id  设备类型id
* @param attribute_id 属性id
* @param start_time 单位UTC秒
* @param end_time   单位UTC秒
* @param interval   单位秒
*/
LenSmJs.listAirPurifierDataByGadgetId_h5 = function(gadget_id,gadget_type_id,attribute_id,start_time,end_time,interval){
    if( LenSmJs.isiOS == true ){
        listAirPurifierDataByGadgetId(
        "gadget_id="+gadget_id,
        "gadget_type_id="+gadget_type_id,
        "attribute_id="+attribute_id,
        "start_time="+start_time,"end_time="+end_time,
        "interval="+interval
        );
    }else{
        JsInterface.listAirPurifierDataByGadgetId(gadget_id,gadget_type_id,attribute_id,start_time,end_time,interval);

    }
}

  /**
     * 根据用户基本信息获取体脂相关数据
     * @param sex  性别  0男1女 但是数据解析那里是0女1男 这里需要特别注意
     * @param mode  普通人/运动员  0普通人1运动员 现在没有运动员模式传0 即可
     * @param height 身高
     * @param age  年龄
     * @param resistance  阻抗
     * @param weight  体重
     */
LenSmJs.calculationBodyFatData_h5 = function (sex, mode, height, age, resistance, weight) {
    if (LenSmJs.isiOS == true) {
        calculationBodyFatData("sex=" + sex, "mode=" + mode, "height=" + height, "age=" + age, "resistance=" + resistance, "weight=" + weight);
    } else {
        JsInterface.calculationBodyFatData(sex, mode, height, age, resistance, weight);
    }
}

    /**
     * 发送心跳
     * @param data
     * @param address
     * @param serviceUuid
     * @param writeUuid
     * @param intervalTime 心跳间隔时间（毫秒）
     */
LenSmJs.sendHeartBeat_h5 = function (data,address,uuid,serviceUuid,writeUuid,intervalTime) {
    if (LenSmJs.isAndroid == true) {
        JsInterface.sendHeartBeat(data,address,serviceUuid,writeUuid,intervalTime);
    } else {
        sendHeartBeat("data="+data,"address="+address,"uuid="+uuid,"intervalTime="+intervalTime);
    }
}
    /**
     * 结束心跳
     */
LenSmJs.cancelHeartBeat_h5 = function () {
    if (LenSmJs.isAndroid == true) {
        JsInterface.cancelHeartBeat();
    } else {
        cancelHeartBeat();
    }
}

    /**
     * 向蓝牙设备写入数据
     * @param data  写入数据
     * @param address mac 地址
     * @param uuid  ios 需要的特征值
     * @param serviceUuid  android 需要
     * @param writeUuid android 需要
     */
LenSmJs.writeDataToDevice_h5 = function (data,address,uuid,serviceUuid,writeUuid){
    if (LenSmJs.isAndroid == true) {
      JsInterface.writeDataToDevice(data,address,serviceUuid,writeUuid);
    } else {
      writeDataToDevice('data='+data,'address='+address,'uuid='+uuid);
    }
}

    /**
     * 更具传入的encryptType和对应encryptKey 加密数据并写入设备
     * @param data  写入数据，十六进制的字符串，字符串长度需要为偶数位
     * @param address  mac地址
     * @param serviceUuid  uuid 支持16位，32位，和128位的，如果 实际写入时会将16位，32位的转换为128位UUID
     * @param writeUuid  uuid 支持16位，32位，和128位的，如果 实际写入时会将16位，32位的转换为128位UUID
     * @param encryptKey   加密key
     * @param encryptType  加密模式.
     */
LenSmJs.writeDataToDeviceWithEncrypt_h5 = function (data,address,serviceUuid,uuid,encryptKey,encryptType){
    if (LenSmJs.isAndroid == true) {
      JsInterface.writeDataToDeviceWithEncrypt(data,address,serviceUuid,uuid,encryptKey,encryptType);
    } else {
      writeDataToDeviceWithEncrypt('data='+data,'address='+address,'uuid='+uuid,'encryptKey='+encryptKey,'encryptType='+encryptType);
    }
}
/**
 * 注册蓝牙设备数据回调
 * @param address mac 地址
 * @param uuid  ios 需要的特征值R
 * @param serviceUuid  android 需要
 * @param readUuid   android 需要
 */
LenSmJs.enableBleNotify_h5 = function (address,uuid,serviceUuid,readUuid) {
  if (LenSmJs.isiOS == true) {
      enableBleNotify("address=" + address, 'uuid='+uuid);
  } else {
      JsInterface.enableBleNotify(address,serviceUuid,readUuid);
  }
}
    /**
     * 更具不同的解密类型 从设备读取对应数据后解密并返回
     * @param address
     * @param serviceUuid  uuid 支持16位，32位，和128位的，如果 实际写入时会将16位，32位的转换为128位UUID
     * @param readUuid  uuid 支持16位，32位，和128位的，如果 实际写入时会将16位，32位的转换为128位UUID
     * @param decryptKey  解密key
     * @param decryptType 返回数据的解密类型
     */
LenSmJs.readDataFromDeviceWithDecrypt_h5 = function (address,serviceUuid,uuid,decryptKey,decryptType) {
  if (LenSmJs.isiOS == true) {
      readDataFromDeviceWithDecrypt("address=" + address, 'uuid='+uuid,'serviceUuid='+serviceUuid,'decryptKey='+decryptKey,'decryptType='+decryptType);
  } else {
      JsInterface.readDataFromDeviceWithDecrypt(address,serviceUuid,uuid,decryptKey,decryptType);
  }
}
//*************************************** 非对称加密  开始 *******************************************


    /**
     * 生成 对称加密，解密 秘钥
     * @param algorithm 生成秘钥算法的标准名称
     * @param algorithm  秘钥长度 (AES密钥长度最少是128位，推荐使用256位)
     * @return 返回Byte64为编码格式的字符串的加/解 密，的秘钥。
     */
LenSmJs.generateEncryptDecryptKey_h5 = function (algorithm,keySize) {
  if (LenSmJs.isiOS == true) {
  } else {
      JsInterface.generateEncryptDecryptKey(algorithm,keySize);
  }
}

    /**
     * 对称 加密
     *
     * @param type 算法名称  例如：AES
     * @param transformation  对应转换算法名称  算法/工作模式/填充模式 例如：AES/CBC/PKCS5Padding
     * @param key  接收 加密key
     * @param srcData  需要加密的原始数据
     */
LenSmJs.encrypt_h5 = function (type,transformation,key,srcData) {
  if (LenSmJs.isiOS == true) {
  } else {
      JsInterface.encrypt(type,transformation,key,srcData);
  }
}

    /**
     * 对称 解密
     *
     * @param type  算法名称  例如：AES
     * @param transformation 对应转换算法名称  算法/工作模式/填充模式 例如：AES/CBC/PKCS5Padding
     * @param ciphertext 加密密文 十六进制字符串
     * @param key
     */
LenSmJs.decrypt_h5 = function (type,transformation,ciphertext,key) {
  if (LenSmJs.isiOS == true) {
  } else {
      JsInterface.decrypt(type,transformation,ciphertext,key);
  }
}

//******************************************** 结束 *************************************************

    /**
     * 从云端获取hub列表
     */
LenSmJs.getHubList_h5 = function () {
  if (LenSmJs.isiOS == true) {
        getHubList();
  } else {
      JsInterface.getHubList();
  }
}

    /**
     * 获取获取预授权码
     */
LenSmJs.getPreAuthCode_h5 = function () {
  if (LenSmJs.isiOS == true) {
        getPreAuthCode();
  } else {
      JsInterface.getPreAuthCode();
  }
}

    /**
     * 获取用户token 用户必须登录后才能获取
     */
LenSmJs.getUserToken_h5 = function () {
  if (LenSmJs.isiOS == true) {
        getUserToken();
  } else {
      JsInterface.getUserToken();
  }
}
/***
 * 其他方法：
 *
 * @returns {*}
 * 获取当前时区
 * 返回值：时区字符串
 */
//获取时区
LenSmJs.getTimezoneName_h5=function (){
    var tmSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
    var so = -1 * tmSummer.getTimezoneOffset();
    var tmWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
    var  wo = -1 * tmWinter.getTimezoneOffset();

    if (-660 == so && -660 == wo) return 'Pacific/Midway';
    if (-600 == so && -600 == wo) return 'Pacific/Tahiti';
    if (-570 == so && -570 == wo) return 'Pacific/Marquesas';
    if (-540 == so && -600 == wo) return 'America/Adak';
    if (-540 == so && -540 == wo) return 'Pacific/Gambier';
    if (-480 == so && -540 == wo) return 'US/Alaska';
    if (-480 == so && -480 == wo) return 'Pacific/Pitcairn';
    if (-420 == so && -480 == wo) return 'US/Pacific';
    if (-420 == so && -420 == wo) return 'US/Arizona';
    if (-360 == so && -420 == wo) return 'US/Mountain';
    if (-360 == so && -360 == wo) return 'America/Guatemala';
    if (-360 == so && -300 == wo) return 'Pacific/Easter';
    if (-300 == so && -360 == wo) return 'US/Central';
    if (-300 == so && -300 == wo) return 'America/Bogota';
    if (-240 == so && -300 == wo) return 'US/Eastern';
    if (-240 == so && -240 == wo) return 'America/Caracas';
    if (-240 == so && -180 == wo) return 'America/Santiago';
    if (-180 == so && -240 == wo) return 'Canada/Atlantic';
    if (-180 == so && -180 == wo) return 'America/Montevideo';
    if (-180 == so && -120 == wo) return 'America/Sao_Paulo';
    if (-150 == so && -210 == wo) return 'America/St_Johns';
    if (-120 == so && -180 == wo) return 'America/Godthab';
    if (-120 == so && -120 == wo) return 'America/Noronha';
    if (-60 == so && -60 == wo) return 'Atlantic/Cape_Verde';
    if (0 == so && -60 == wo) return 'Atlantic/Azores';
    if (0 == so && 0 == wo) return 'Africa/Casablanca';
    if (60 == so && 0 == wo) return 'Europe/London';
    if (60 == so && 60 == wo) return 'Africa/Algiers';
    if (60 == so && 120 == wo) return 'Africa/Windhoek';
    if (120 == so && 60 == wo) return 'Europe/Amsterdam';
    if (120 == so && 120 == wo) return 'Africa/Harare';
    if (180 == so && 120 == wo) return 'Europe/Athens';
    if (180 == so && 180 == wo) return 'Africa/Nairobi';
    if (240 == so && 180 == wo) return 'Europe/Moscow';
    if (240 == so && 240 == wo) return 'Asia/Dubai';
    if (270 == so && 210 == wo) return 'Asia/Tehran';
    if (270 == so && 270 == wo) return 'Asia/Kabul';
    if (300 == so && 240 == wo) return 'Asia/Baku';
    if (300 == so && 300 == wo) return 'Asia/Karachi';
    if (330 == so && 330 == wo) return 'Asia/Calcutta';
    if (345 == so && 345 == wo) return 'Asia/Katmandu';
    if (360 == so && 300 == wo) return 'Asia/Yekaterinburg';
    if (360 == so && 360 == wo) return 'Asia/Colombo';
    if (390 == so && 390 == wo) return 'Asia/Rangoon';
    if (420 == so && 360 == wo) return 'Asia/Almaty';
    if (420 == so && 420 == wo) return 'Asia/Bangkok';
    if (480 == so && 420 == wo) return 'Asia/Krasnoyarsk';
    if (480 == so && 480 == wo) return 'Australia/Perth';
    if (540 == so && 480 == wo) return 'Asia/Irkutsk';
    if (540 == so && 540 == wo) return 'Asia/Tokyo';
    if (570 == so && 570 == wo) return 'Australia/Darwin';
    if (570 == so && 630 == wo) return 'Australia/Adelaide';
    if (600 == so && 540 == wo) return 'Asia/Yakutsk';
    if (600 == so && 600 == wo) return 'Australia/Brisbane';
    if (600 == so && 660 == wo) return 'Australia/Sydney';
    if (630 == so && 660 == wo) return 'Australia/Lord_Howe';
    if (660 == so && 600 == wo) return 'Asia/Vladivostok';
    if (660 == so && 660 == wo) return 'Pacific/Guadalcanal';
    if (690 == so && 690 == wo) return 'Pacific/Norfolk';
    if (720 == so && 660 == wo) return 'Asia/Magadan';
    if (720 == so && 720 == wo) return 'Pacific/Fiji';
    if (720 == so && 780 == wo) return 'Pacific/Auckland';
    if (765 == so && 825 == wo) return 'Pacific/Chatham';
    if (780 == so && 780 == wo) return 'Pacific/Enderbury';
    if (840 == so && 840 == wo) return 'Pacific/Kiritimati';
    return 'US/Pacific';
}
export default LenSmJs
