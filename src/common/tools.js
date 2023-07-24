const {Notification, dialog} = require('electron');
const path = require('path');

class Tools {
    constructor() {
    }

    // alert 弹窗
    static dialog(
        win,
        {
            type = 'info',
            title = '消息',
            message = '',
            detail = '',
            buttons = ['确定'],
        }
    ) {
        return dialog.showMessageBox(win, {
            type,
            title,
            message,
            detail,
            buttons,
        });
    }

    // 发送通知方法
    static showNotification({title, body}) {
        if (!title && !body) {
            return;
        }
        new Notification({
            title,
            body,
        }).show();
    }

    // 判断是否是音频文件
    static isAudio(fileName = '') {
        const all = [
            'avi',
            'wmv',
            'mpg',
            'mpeg',
            'mov',
            'rm',
            'ram',
            'swf',
            'flv',
            'mp4',
            'mp3',
            'wma',
            'avi',
            'rm',
            'rmvb',
            'flv',
            'mpg',
            'mkv',
            'flac',
            'wav',
            'm4a',
            'ncm',
            'ape',
            'ogg'
        ];

        const suffix = fileName.split('.').pop();
        return all.includes(suffix);
    }

    static sleep(time) {
        return new Promise((resolve, reject) => {
            // 如果没读取到配置 则给默认值
            if (!time) {
                time = 1000;
            }

            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    // md5 加密
    static md5(msg = '') {
        const crypto = require('crypto');
        const hash = crypto.createHash('md5');
        // 可任意多次调⽤update():
        hash.update(msg);
        return hash.digest('hex');
    }
}

module.exports = Tools;
