const CONFIG = {
    root: 'ont',
    // baseUrl: 'https://api.ontns.io',
    baseUrl: 'https://api.ontns.io',
    whitePaperZH: '/static/pdf/whitepaper-zh.pdf',   // 白皮书 - 中文版
    whitePaperEN: '/static/pdf/whitepaper-en.pdf',   // 白皮书 - 英文版
    wechar: '/static/logo/wechar.jpg',
    wecharName: 'h2team',          // 公众号名称
    email: 'contact@h2team.io',         // 平台邮箱
    contract: { // 合约
        scriptHash: 'a76cecf1fa438d6619f5e61181ddaaddbbdba6ab',
        gasPrice: 500,
        gasLimit: 200000
    },
    wallet: {
        contract: '',
        types: ['ONT', 'ONG']
    },
    currency: {
        ONT: {
            name: 'ONT',
            precision: 0            // 精度
        },
        ONG: {
            name: 'ONG',
            precision: 9
        }
    },
    logo: {
        main: '/static/logo/logo.png',
        white: '/static/logo/logo_white.png',
        black: '/static/logo/logo_black.png'
    },
    scenes: [
        {
            name: 'address',
            icon: 'wallet',
            img: '/static/scenes/0.png'
        },
        {
            name: 'email',
            icon: 'mail',
            img: '/static/scenes/1.png'
        },
        {
            name: 'id',
            icon: 'idcard',
            img: '/static/scenes/2.png'
        },
        {
            name: 'contract',
            icon: 'block',
            img: '/static/scenes/3.png'
        },
        {
            name: 'alias',
            icon: 'smile',
            img: '/static/scenes/4.png'
        },
        {
            name: 'phone',
            icon: 'mobile',
            img: '/static/scenes/5.png'
        },
        {
            name: 'remark',
            icon: 'profile',
            img: '/static/scenes/6.png'
        }
    ],
    partners: [
        {
            name: 'ont',
            img: '/static/logos/logo_ont.png'
        },
        {
            name: 'sea',
            img: '/static/logos/logo_sea.png'
        },
        {
            name: 'bixiaobai',
            img: '/static/logos/logo_bxb.png'
        }
    ],
    links: [
        {
            name: 'telegram',
            img: '/static/links/telegram.png',
            url: 'https://t.me/onsname'
        },
        {
            name: 'twitter',
            img: '/static/links/twitter.png',
            url: 'https://ont.io/?tdsourcetag=s_pctim_aiomsg'
        },
        {
            name: 'qq',
            img: '/static/links/qq.png',
            url: 'https://ont.io/?tdsourcetag=s_pctim_aiomsg'
        },
        {
            name: 'github',
            img: '/static/links/github.png',
            url: 'https://ont.io/?tdsourcetag=s_pctim_aiomsg'
        }
    ],
    registerStatus: {
        11: 'ERR_EXITDOMAIN',     // 0xB 域名早已被注册
        12: 'ERR_YOUHAVE',        // 0xC 已经达到当前领取条件的上限
        13: 'ERR_YOUNOTHAVE',     // 0xD 你不拥有该域名
        14: 'ERR_OK',             // 0xE 操作成功
        15: 'ERR_INVIA_ZM',       // 0xF 域名中包含不允许的字符
        16: 'ERR_DOMAIN_LENGTH',  // 0x10 域名长度不符合规范
        17: 'ERR_NOAUTH',         // 0x11 越权操作
        18: 'ERR_ONT_NO',         // 0x12 账户ont不足
        19: 'ERR_YOU_NOT_HAVE'    // 0x13 当前域名不属于你
    },
    // new Map([
    //     [11, 'ERR_EXITDOMAIN'],     // 0xB 域名早已被注册
    //     [12, 'ERR_YOUHAVE'],        // 0xC 已经达到当前领取条件的上限
    //     [13, 'ERR_YOUNOTHAVE'],     // 0xD 你不拥有该域名
    //     [14, 'ERR_OK'],             // 0xE 操作成功
    //     [15, 'ERR_INVIA_ZM'],       // 0xF 域名中包含不允许的字符
    //     [16, 'ERR_DOMAIN_LENGTH'],  // 0x10 域名长度不符合规范
    //     [17, 'ERR_NOAUTH'],         // 0x11 越权操作
    //     [18, 'ERR_ONT_NO'],         // 0x12 账户ont不足
    //     [19, 'ERR_YOU_NOT_HAVE']    // 0x13 当前域名不属于你
    // ]),
    // 返回的操作码
    domainActionResultCode: {
        'OP_REGISTER': 1,           // 注册域名
        'OP_DROP': 2,               // 销毁域名
        'OP_TRANFER': 3,            // 转移域名
        'OP_SETRESOLVE': 4,         // 设置域名解析
        'OP_DONAT': 5               // 捐赠操作
    },
    // 域名解析操作码
    domainResolveActionCode: {
        'PROTOCOL_ADDRESS': 1,      // 解析ONT钱包地址
        'PROTOCOL_ONTID': 2,        // 解析ONTID地址
        'PROTOCOL_NAME': 3,         // 解析自己名字
        'PROTOCOL_INFO': 4,         // 解析任何内容（文字信息）
        'PROTOCOL_EMAIL': 5,        // 解析电子邮件地址
        'PROTOCOL_PHONE': 6,        // 解析电话号码
    },
}