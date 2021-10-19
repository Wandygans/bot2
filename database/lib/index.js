/*
--> INFO MITSUHA BOT <--
______________________________
SC ORI : MHANKBARBAR
RECODE : MITSUHA
_______________________________

--> SPECIAL THANKS TO <--
________________________________
MHANKBARBAR
DIMAS_SATRIA
ZAKY06CHEAT
RURICHAN
RIDWAN
HAFIDZ
AINE TEAM
ALLAH SWT
ORTU
CHACHA LORD HEKER JOKER ( MITSUHA )
________________________________
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    relayWAMessage,
    prepareMessageFromContent,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const imageToBase64 = require('image-to-base64')
const base64ToImage = require('base64-to-image')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { ind } = require('./bahasa')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const produk = JSON.parse(fs.readFileSync('./lib/produk.js'))
const like = JSON.parse(fs.readFileSync('./src/Star1.json'))
const dislike = JSON.parse(fs.readFileSync('./src/Star2.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const _registered = JSON.parse(fs.readFileSync('./src/pengguna.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antitoxic = JSON.parse(fs.readFileSync('./src/antitoxic.json'))
const premium = JSON.parse(fs.readFileSync('./src/premium.json'))

              vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN: Lord Mitsuha ツ\n' 
              + 'ORG: CREATOR/OWNER BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285731261728:+62 85731261728\n'  
              + 'END:VCARD'
             
/*_________________
CONST SETTINGS
___________________*/

prefix = setting.prefix
prefix2 = `.`
aku = `MITSUHA SANGE`
owner = setting.ownerNumber
namaowner = setting.nama
namabot = setting.bot
nobot = setting.nobot
thumb = fs.readFileSync(`./lib/odc.jpeg`)
thumb2 = fs.readFileSync(`./lib/odc.jpeg`)
fakeimage = fs.readFileSync(`./lib/odc.jpeg`)
cap = `kenapa kenapa? karena elu wibu`
namo = ``
ator = ``
agus = `*`
fakeimage = fs.readFileSync(`./lib/odc.jpeg`)
numbernye = '0'
kunci = setting.kunci
respon = setting.respon
on = false 
cap = 'DONT BULLY ME PLEASE'
blocked = []
hit_today = []
const ofrply = fs.readFileSync('./lib/odc.jpeg')

/*_________________
BAGIAN FUNCTION
___________________*/

function kyun(seconds){ 
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}H - ${pad(minutes)}M`
}

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
        }
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }
const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }
const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        }

    async function starts() {
	const client = new WAConnection()
	//WWEB 
    client.version = [2, 2119, 6]  //Fix Bug
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
	console.log(color('[','red'), color('!','red'), color(']','red'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

           
const acaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = acaBulan[moment().format('MM') - 1]        
const hour_now = moment().format('HH')
        var ucapanWaktu = 'Selamat Pagi'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Soree'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Malam'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Tengah Malam'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }     
const date = new Date().toLocaleDateString()      
const fkatalok =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2007, status: 200, thumbnail: thumb2, surface: 200, message: `MITSUHA BOT | 2.0\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog1 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `📢 PROMOTE DETEKSI`, orderTitle: 'Welcome', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog2 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `📢 DEMOTE DETEKSI`, orderTitle: 'Welcome', sellerJid: '0@s.whatsapp.net'} } } 
const fkatalog3 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `©Mitsuhabot\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const faketag3 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb2, surface: 200, message: `☕ TAG ALL ☕\nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const tokyo = moment.tz('Asia/Tokyo').format('HH:mm:ss')
const kuwait = moment.tz('Asia/Kuwait').format('HH:mm:ss')
const hong_kong = moment.tz('Asia/Hong_Kong').format('HH:mm:ss')
const brunei = moment.tz('Asia/Brunei').format('HH:mm:ss')
const bangkok = moment.tz('Asia/Bangkok').format('HH:mm:ss')
const qatar = moment.tz('Asia/Qatar').format('HH:mm:ss')
const singap = moment.tz('Asia/Singapore').format('HH:mm:ss')
const kuala_l = moment.tz('Asia/Kuala_Lumpur').format('HH:mm:ss')
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Mitsuhabot", 
"caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
}}}
const fgclinkk = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `MITSUHA BOT`, 
"caption": `©Mitsuhabot\nTANGGAL : ${date} - ${jam}\nDONT CALL ME PLEASE`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
		}
	}
}
const fgclinkkk = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `MITSUHA BOT`, 
"caption": `©Mitsuhabot\nTANGGAL : ${date} - ${jam}\nDONT CALL ME PLEASE`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
		}
	}
}

const fakeitem = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe: false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./lib/odc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`©Mitsuhabot`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           

           client.on('group-participants-update', async (anu) => {
		    if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    gif = fs.readFileSync('./lib/welkom.mp4')
			
try {
		    ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			uptime = process.uptime()
let ge = await client.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `Assalamualaikum @${num.split('@')[0]} selamat datang di grup kami 🙏`,
"buttons": [
{buttonId: '/START', buttonText: {displayText: '/START'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
client.relayWAMessage(ge)


							             /*fs.writeFileSync(`./${mdata.id}.jpeg`, await getBuffer(ppimg))
		      buttons = [{buttonId:`Hy @${num.split('@')[0]}`,buttonText:{displayText:`Hy @${num.split('@')[0]}`},type:1}]
              imageMsg = ( await client.prepareMessage(mdata.id, fs.readFileSync(`./${mdata.id}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'welcome message', imageMessage: imageMsg,
              contentText:`hello sis @${num.split('@')[0]} welcome to the group dont forget to intro ~`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(mdata.id,{buttonsMessage},{quoted: fkatalok, contextInfo: {"mentionedJid": [num]}})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${mdata.id}.jpeg`)*/
            
			/*teks = `Hai @${num.split('@')[0]} Selamat Datang Di ${mdata.subject}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n${mdata.desc}`

			let buff = await getBuffer(ppimg)
		client.sendMessage(mdata.id, buff, MessageType.image,{quoted: falfa, caption: teks, contextInfo: {"mentionedJid": [num]}})*/
		/*client.sendMessage(mdata.id, gif, MessageType.video, { quoted: fkatalog3, caption: teks, contextInfo: {"mentionedJid": [num]}})*/
		
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			gif = fs.readFileSync('./lib/welkom.mp4')

			try {
		   ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			/*teks = `@${num.split('@')[0]} *Good Bye Sipit 👋*`*/
			  
			/*let buff = await getBuffer(ppimg)*/
			uptime = process.uptime()
let gek = await client.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `Selamat tinggal @${num.split('@')[0]} semoga sehat selalu ❤`,
"buttons": [
{buttonId: 'Bye👋', buttonText: {displayText: 'Bye👋'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
client.relayWAMessage(gek)
			/*client.sendMessage(mdata.id, buff, MessageType.image,{quoted: falfa, caption: teks, contextInfo: {"mentionedJid": [num]}})*/
			/*client.sendMessage(mdata.id, gif, MessageType.video, { quoted: fkatalog3, caption: teks, contextInfo: {"mentionedJid": [num]}})*/
			
 } else if (anu.action == 'promote') {
			const mdata = await client.groupMetadata(anu.jid)
			num = anu.participants[0]
			 
			try {
			ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
			let buff = await getBuffer(ppimg)
			
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SELAMAT`,buttonText:{displayText:'SELAMAT'},type:1}]
              imageMsg = ( await client.prepareMessage(mdata.id, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`ADMIN NEW TERDETEKSI\n\nPENGGUNA : @${num.split('@')[0]}\nTANGGAL : ${date}\nCAPTION : SELAMAT ANJING`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(mdata.id,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [num],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fkatalog1})
              client.relayWAMessage(prep)
              
			/*teks = `*PROMOTE TERDETEKSI*
❏ *NOMOR* = ${num.replace('@s.whatsapp.net', '')}
❏ *USER* = @${num.split('@')[0]}
❏ *TANGGAL* = ${date}
`
			client.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkatalog1, caption : teks, contextInfo: {mentionedJid: [num]}})*/
		    } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await client.groupMetadata(anu.jid)
			try {
			ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			 
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SELAMAT`,buttonText:{displayText:'SELAMAT'},type:1}]
              imageMsg = ( await client.prepareMessage(mdata.id, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`DEMOTE NEW TERDETEKSI\n\nPENGGUNA : @${num.split('@')[0]}\nTANGGAL : ${date}\nCAPTION : SELAMAT ANJING`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(mdata.id,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [num],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fkatalog2})
              client.relayWAMessage(prep)
              
			/*teks = `*DEMOTE TERDETEKSI*
❏ *NOMOR* = ${num.replace('@s.whatsapp.net', '')}
❏ *USER* = @${num.split('@')[0]}
❏ *TANGGAL* = ${date}
`
			client.sendMessage(mdata.id, buff, MessageType.image, {quoted: fkatalog2, caption : teks, contextInfo: {mentionedJid: [num]}})*/
			
			
            }
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}) ,
	      client.on('CB:Blocklist', json => {
          if (blocked.length > 2) return
	      for (let i of json[1].blocklist) {
	      blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	        client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            if (mek.key.fromMe) return 
			global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const tescuk = ["0@s.whatsapp.net"]
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			resbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
			buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const mitsuha = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': '', 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 353, 'width': 353, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)} } }
			const isCmd = body.startsWith(prefix)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			

			mess = {
				
				wait: '「 SEDANG DI PROSES 」',
				success: '*「 SUKSES 」 KAYAK MIE SUKSES *',
				error: {
			    stick: '*「 GAGAL 」 ULANGI LAGI*',
				Iv: '*「 GA VALID 」 LINK GA VALID*'
				},
				only: {
			    group: '「 KHUSUS GRUP 」',
			    ownerG: '「 KHUSUS OWNER GRUP 」',
			    ownerB: '「 KHUSUS OWNER BOT 」',
				admin: '「 KHUSUS ADMIN GRUP 」',
				Badmin: '「 BOT HARUS JADI ADMIN 」'
				}
			}
            hit_today.push(command)
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			
			const totalchat = await client.chats.all()
			const isPrem = premium.includes(sender)
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '' 
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiToxic = isGroup ? antitoxic.includes(from) : false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isRegistered = checkRegisteredUser(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined


            const fakebc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `💬 *BROADCAST BOT* 💬`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
            
            
		   const reply = (teks) => {
				client.sendMessage(from, teks, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
			}
			
			
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text, {quoted: falfa})
			}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": memberr}})
			}
			
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
          const sendButton = (teks) => {
               client.sendMessage(from, teks, MessageType.buttonsMessage, {quoted: fkatalok})
			}
           
			const keranjang = (teks) => {
            res = client.sendMessage(from,{ "orderMessage": { "itemCount": 321, "message": cap, "footerText": "*_© Mitsuha Official_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:fkatalok})
        }       
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			   
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
			
	
			function addMetadata(packname, author) {	
				if (!packname) packname = ' '; if (!author) author = ' ';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
          
        const levelRole = getLevelingLevel(sender)
        var role ='Newbie'
        if (levelRole <= 2) {
            role ='Newbie'
        } else if (levelRole <= 4) {
            role ='Beginner Grade 1'
        } else if (levelRole <= 6) {
            role ='Beginner Grade 2'
        } else if (levelRole <= 8) {
            role ='Beginner Grade 3'
        } else if (levelRole <= 10) {
            role ='Beginner Grade 4'
        } else if (levelRole <= 12) {
            role ='Private Grade 1'
        } else if (levelRole <= 14) {
            role ='Private Grade 2'
        } else if (levelRole <= 16) {
            role ='Private Grade 3'
        } else if (levelRole <= 18) {
            role ='Private Grade 4'
        } else if (levelRole <= 20) {
            role ='Private Grade 5'
        } else if (levelRole <= 22) {
            role ='Corporal Grade 1'
        } else if (levelRole <= 24) {
            role ='Corporal Grade 2'
        } else if (levelRole <= 26) {
            role ='Corporal Grade 3'
        } else if (levelRole <= 28) {
            role ='Corporal Grade 4'
        } else if (levelRole <= 30) {
            role ='Corporal Grade 5'
        } else if (levelRole <= 32) {
            role ='Sergeant Grade 1'
        } else if (levelRole <= 34) {
            role ='Sergeant Grade 2'
        } else if (levelRole <= 36) {
            role ='Sergeant Grade 3'
        } else if (levelRole <= 38) {
            role ='Sergeant Grade 4'
        } else if (levelRole <= 40) {
            role ='Sergeant Grade 5'
        } else if (levelRole <= 42) {
            role ='Staff Grade 1'
        } else if (levelRole <= 44) {
            role ='Staff Grade 2'
        } else if (levelRole <= 46) {
            role ='Staff Grade 3'
        } else if (levelRole <= 48) {
            role ='Staff Grade 4'
        } else if (levelRole <= 50) {
            role ='Staff Grade 5'
        } else if (levelRole <= 52) {
            role ='Sergeant Grade 1'
        } else if (levelRole <= 54) {
            role ='Sergeant Grade 2'
        } else if (levelRole <= 56) {
            role ='Sergeant Grade 3'
        } else if (levelRole <= 58) {
            role ='Sergeant Grade 4'
        } else if (levelRole <= 60) {
            role ='Sergeant Grade 5'
        } else if (levelRole <= 62) {
            role ='2nd Lt. Grade 1 '
        } else if (levelRole <= 64) {
            role ='2nd Lt. Grade 2'
        } else if (levelRole <= 66) {
            role ='2nd Lt. Grade 3'
        } else if (levelRole <= 68) {
            role ='2nd Lt. Grade 4'
        } else if (levelRole <= 70) {
            role ='2nd Lt. Grade 5'
        } else if (levelRole <= 72) {
            role ='1st Lt. Grade 1'
        } else if (levelRole <= 74) {
            role ='1st Lt. Grade 2'
        } else if (levelRole <= 76) {
            role ='1st Lt. Grade 3'
        } else if (levelRole <= 78) {
            role ='1st Lt. Grade 4'
        } else if (levelRole <= 80) {
            role ='1st Lt. Grade 5'
        } else if (levelRole <= 82) {
            role ='Major Grade 1'
        } else if (levelRole <= 84) {
            role ='Major Grade 2'
        } else if (levelRole <= 86) {
            role ='Major Grade 3'
        } else if (levelRole <= 88) {
            role ='Major Grade 4'
        } else if (levelRole <= 90) {
            role ='Major Grade 5'
        } else if (levelRole <= 92) {
            role ='Colonel Grade 1'
        } else if (levelRole <= 94) {
            role ='Colonel Grade 2'
        } else if (levelRole <= 96) {
            role ='Colonel Grade 3'
        } else if (levelRole <= 98) {
            role ='Colonel Grade 4'
        } else if (levelRole <= 100) {
            role ='Colonel Grade 5'
        } else if (levelRole <= 102) {
            role ='Brigadier Early'
        } else if (levelRole <= 104) {
            role ='Brigadier Silver'
        } else if (levelRole <= 106) {
            role ='Brigadier gold'
        } else if (levelRole <= 108) {
            role ='Brigadier Platinum'
        } else if (levelRole <= 110) {
            role ='Brigadier Diamond'
        } else if (levelRole <= 112) {
            role ='Major General Early'
        } else if (levelRole <= 114) {
            role ='Major General Silver'
        } else if (levelRole <= 116) {
            role ='Major General gold'
        } else if (levelRole <= 118) {
            role ='Major General Platinum'
        } else if (levelRole <= 120) {
            role ='Major General Diamond'
        } else if (levelRole <= 122) {
            role ='Lt. General Early'
        } else if (levelRole <= 124) {
            role ='Lt. General Silver'
        } else if (levelRole <= 126) {
            role ='Lt. General gold'
        } else if (levelRole <= 128) {
            role ='Lt. General Platinum'
        } else if (levelRole <= 130) {
            role ='Lt. General Diamond'
        } else if (levelRole <= 132) {
            role ='General Early'
        } else if (levelRole <= 134) {
            role ='General Silver'
        } else if (levelRole <= 136) {
            role ='General gold'
        } else if (levelRole <= 138) {
            role ='General Platinum'
        } else if (levelRole <= 140) {
            role ='General Diamond'
        } else if (levelRole <= 142) {
            role ='Commander Early'
        } else if (levelRole <= 144) {
            role ='Commander Intermediate'
        } else if (levelRole <= 146) {
            role ='Commander Elite'
        } else if (levelRole <= 148) {
            role ='The Commander Hero'
        } else if (levelRole <= 152) {
            role ='Legends'
        } else if (levelRole <= 154) {
            role ='Legends'
        } else if (levelRole <= 156) {
            role ='Legends'
        } else if (levelRole <= 158) {
            role ='Legends'
        } else if (levelRole <= 160) {
            role ='Legends'
        } else if (levelRole <= 162) {
            role ='Legends'
        } else if (levelRole <= 164) {
            role ='Legends'
        } else if (levelRole <= 166) {
            role ='Legends'
        } else if (levelRole <= 168) {
            role ='Legends'
        } else if (levelRole <= 170) {
            role ='Legends'
        } else if (levelRole <= 172) {
            role ='Legends'
        } else if (levelRole <= 174) {
            role ='Legends'
        } else if (levelRole <= 176) {
            role ='Legends'
        } else if (levelRole <= 178) {
            role ='Legends'
        } else if (levelRole <= 180) {
            role ='Legends'
        } else if (levelRole <= 182) {
            role ='Legends'
        } else if (levelRole <= 184) {
            role ='Legends'
        } else if (levelRole <= 186) {
            role ='Legends'
        } else if (levelRole <= 188) {
            role ='Legends'
        } else if (levelRole <= 190) {
            role ='Legends'
        } else if (levelRole <= 192) {
            role ='Legends'
        } else if (levelRole <= 194) {
            role ='Legends'
        } else if (levelRole <= 196) {
            role ='Legends'
        } else if (levelRole <= 198) {
            role ='Legends'
        } else if (levelRole <= 200) {
            role ='Legends'
        } else if (levelRole <= 210) {
            role ='Legends'
        } else if (levelRole <= 220) {
            role ='Legends'
        } else if (levelRole <= 230) {
            role ='Legends'
        } else if (levelRole <= 240) {
            role ='Legends'
        } else if (levelRole <= 250) {
            role ='Legends'
        } else if (levelRole <= 260) {
            role ='Legends'
        } else if (levelRole <= 270) {
            role ='Legends'
        } else if (levelRole <= 280) {
            role ='Legends'
        } else if (levelRole <= 290) {
            role ='Legends'
        } else if (levelRole <= 300) {
            role ='Legends'
        } else if (levelRole <= 310) {
            role ='Legends'
        } else if (levelRole <= 320) {
            role ='Legends'
        } else if (levelRole <= 330) {
            role ='Legends'
        } else if (levelRole <= 340) {
            role ='Legends'
        } else if (levelRole <= 350) {
            role ='Legends'
        } else if (levelRole <= 360) {
            role ='Legends'
        } else if (levelRole <= 370) {
            role ='Legends'
        } else if (levelRole <= 380) {
            role ='Legends'
        } else if (levelRole <= 390) {
            role ='Legends'
        } else if (levelRole <= 400) {
            role ='Legends'
        } else if (levelRole <= 410) {
            role ='Legends'
        } else if (levelRole <= 420) {
            role ='Legends'
        } else if (levelRole <= 430) {
            role ='Legends'
        } else if (levelRole <= 440) {
            role ='Legends'
        } else if (levelRole <= 450) {
            role ='Legends'
        } else if (levelRole <= 460) {
            role ='Legends'
        } else if (levelRole <= 470) {
            role ='Legends'
        } else if (levelRole <= 480) {
            role ='Legends'
        } else if (levelRole <= 490) {
            role ='Legends'
        } else if (levelRole <= 500) {
            role ='Legends'
        } else if (levelRole <= 600) {
            role ='Legends'
        } else if (levelRole <= 700) {
            role ='Legends'
        } else if (levelRole <= 800) {
            role ='Legends'
        } else if (levelRole <= 900) {
            role ='Legends'
        } else if (levelRole <= 1000) {
            role ='Legends'
        } else if (levelRole <= 2000) {
            role ='Legends'
        } else if (levelRole <= 3000) {
            role ='Legends'
        } else if (levelRole <= 4000) {
            role ='Legends'
        } else if (levelRole <= 5000) {
            role ='Legends'
        } else if (levelRole <= 6000) {
            role ='Legends'
        } else if (levelRole <= 7000) {
            role ='Legends'
        } else if (levelRole <= 8000) {
            role ='Legends'
        } else if (levelRole <= 9000) {
            role ='Legends'
        } else if (levelRole <= 10000) {
            role ='Legends'

	}
	
	
	const hewan = [
	    '🐡 : 🐬 : 🐋',
		'🐋 : 🐋 : ??',
		'🐬 : 🐬 : 🐬',
		'🐟 : 🦐 : 🦈',
    '🦑 : ?? : 🐲',
    '🐡 : ?? : 🐡',
    '🐡 : 🦐 : 🐋',
    '🦐 : 🐬 : 🐟',
    '🐡 : 🐠 : 🐠',
    '🦀 : 🦀 : 🦀',
    '🦀 : 🐬 : 🐠',
    '🐙 : 🐡 : 🐋',
	    '🐃 : 🦔 : 🐏',
		'🐏 : 🐏 : 🐏',
		'🦔 : 🦔 : 🦔',
		'🐂 : 🦐 : 🐎',
    '🕊 : 🕊 : 🐃',
    '🐃 : 🐃 : 🐃',
    '🐃 : 🦔 : 🐏',
    '🦔 : 🦔 : 🐂',
    '🐃 : 🐎 : 🐎',
    '🐕 : 🐕 : ??',
    '🐕 : 🦔 : 🐎',
    '🐂 : 🐃 : 🐏'
  ]
 
             var premi = 'GERATISAN'
			 if (isPrem) {
				premi = 'PREMIUM'
			 } 
			 var sim = 'Off'
			 if (isSimi) {
				sim = 'AKTIF'
			 } 
             var anlink = 'Off'
             if (isAntiLink) {
             anlink = 'On'
             }
             var anto = 'Off'
             if (isAntiToxic) {
             anto = 'On'
             }
             var lepel = 'Off'
             if (isLevelingOn) {
             lepel = 'On'
             }
             
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`「 _*SELAMAT*_ 」
❏ Nama : ${pushname}
❏ Nomer : ${sender.split("@")[0]}
❏ Xp : ${getLevelingXp(sender)}
❏ Pangkat : ${role}
❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰┈─────────────────➣
`)
                }
            } catch (err) {
                console.error(err)
            }
        }

                    if (budy.includes("https://chat.whatsapp.com")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
					client.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					
					client.groupRemove(from, [kic]).catch((e)=>{reply(`「 BOT HARUS JADI ADMIN 」`)})
	}
		 if (budy.includes("anji")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		if (budy.includes("Anji")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("Janc")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("janc")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("asu")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("ngent")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("kont")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("memek")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		          if (budy == '.kick'
                  || (budy == '#kick')) {
                  if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
                  if (!isGroupAdmins) return reply(`khusus admin`)
                  if (!isBotGroupAdmins) return reply(`bot harus jadi admin`)	
    			  quotedis = mek.message.extendedTextMessage.contextInfo.participant
				  await client.groupRemove(from, [quotedis])
				

				  console.log(color('[COMMAND]', 'blue'), color('Kick', 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				  }
		 if (budy.includes("Asu")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("Ngent")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("Kont")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		 if (budy.includes("Memek")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('「 ADMIN BEBAS HEHE 」')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna 「 BOT HARUS JADI ADMIN 」*`)})
		  }
		
/*_________________
BAGIAN FAKE PESAN
___________________*/
              
            tchat = `${totalchat.length}`   
            
            ucapanFakereply = `「 MITSUHA BOT 」\nBOT CREATED BY MITSUHA`
            
            ucapanFakereply2 = `${pushname}\nCommand: ${command}`
            
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`CREATOR BOT\nMITSUHA-BOTZ`,}}}
            
           const fakereply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `©Mitsuhabot\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
          
           const faketag = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `「  *CIEE KENA TAG BOT*`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
			
			const faketag2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `📢 *NOTICE* 📢`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
			
			/*const faketag3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `💕 HELLO BABY 💞`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }*/
			
            const faketag4 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `©Mitsuhabot\nTANGGAL : ${date} - ${jam}\n_*DONT CALL ME PLEASE*_`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
          
            const faketag5 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `📩 PESAN INGFO MEMBER 📩`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }
 
           const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg') }, 'title': `Mitsuha Bot Whatsapp\n▢ Rp. 10.000,00\nㅤㅤㅤㅤ\nㅤㅤㅤㅤ`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg')}}}
			
			const fkontak2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply2}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply2},;;;\nFN:${ucapanFakereply2},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/odc.jpeg')}}}
			
            /*const freply = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `${pushname}\n〓 ${command}`} } }*/
		    
            const freply =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: thumb, surface: 200, message: `TOTAL PENGGUNA: ${_registered.length}`, orderTitle: 'HALLO BANTU DONASI YA!', sellerJid: '0@s.whatsapp.net'} } } 
		
		


		    const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "1.000.00",
                 "ptt": "true"
                        }
	                  } 
                     }
                     
          const fgclink = {
                     	
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${groupName}`, 
"caption": `TANGGAL : ${date}\n~> YOUR NAME : ${pushname}`, 
'jpegThumbnail': fs.readFileSync(`./lib/odc.jpeg`)
		}
	}
}
const fakeitem = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe: false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./lib/odc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`© 𝑩𝒀 - 𝑴𝑰𝑻??𝑼𝑯?? 𝑩𝑶𝑻𝒁`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
           
           
           const ftoko2 = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./lib/odc.jpeg`) 
					},
					"title": '©Mitsuhabot', 
					"description": "©Mitsuhabot", 
					"currencyCode": "IDR",
					"priceAmount1000": "20000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}


          const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": cr,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./lib/odc.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
      const sendlist = async (tekss, tekstombol, baris) => {
				if (!tekstombol) {tekstombol = 'klik disini'}
				if (!baris) {baris = [{"title": "kok bisa","rowId": `hmm`}]}
				let po = client.prepareMessageFromContent(from, {
	"listMessage":{
    "title": "",
    "description": tekss,
	"buttonText": tekstombol,
	"listType": "SINGLE_SELECT",
	"sections": [
		{
		"rows": baris
     }]}}, {}) 
client.relayWAMessage(po, {waitForAck: true})
			}
			
			fgithub =
			{
	"key": {
		"remoteJid": "6285731261728@s.whatsapp.net",
		"fromMe": true,
		"id": "CC57AC2D101A643CE4D78CBEBE45CCE2"
	},
	"message": {
		"extendedTextMessage": {
			"text": "*HELLO IM MITSUHA*",
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "D7AA558334F612C8E5D68A75C92C7D2D",
				"participant": "6285731261728@s.whatsapp.net",
				"quotedMessage": {
					"extendedTextMessage": {
						"text": "https://www.github.com/ITSMITSUHA\n\nnah ada fake kan",
						"matchedText": "https://www.github.com/ITSMITSUHA",
						"canonicalUrl": "https://github.com/ITSMITSUHA",
						"description": "Contact me. it has one repository available. Follow their code on GitHub.",
						"title": "it - Overview",
						"previewType": "NONE",
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADmAOYDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkBAwUEAv/EAEwQAAEDAwIDAwQMDAQFBQAAAAEAAgMEBREGBxIhMQgTQRciUZQUMjZSVmF1kZKy0dMVIzU3QlNxc3Shs8MWM3KBJDSxwfAlRGLC4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC1KIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICLz7xe7VZYhLeLnQ0ER6PqqhkQ+dxCx07o6EBIOsLBy9FdGf+6DMkWG+VLQnwwsPr0f2p5UtCfDCw+vR/agzJFhvlS0J8MLD69H9qeVLQnwwsPr0f2oMyRYb5UtCfDCw+vR/anlS0J8MLD69H9qDMkWG+VLQnwwsPr0f2p5UtCfDCw+vR/agzJFhvlS0J8MLD69H9qeVLQnwwsPr0f2oMyRYb5UtCfDCw+vR/anlS0J8MLD69H9qDMkWG+VHQnhrCw+vR/avdsuo7JfATZbxbbiAMn2JVMlx9ElB6qIiAiIgIiICIiAiIgIiIBOFWbfjtCPtFZU6e0JLE6uiJjqbkQHticOrIgeRd4FxyBzAGeYzztO63rNF7cuNpkEVxuc3sKOQHDomFri97fjAAAPgXA+CobTwTVU7IaeJ800hw1jGlznH0ADqg7K+tqrjWTVdfUTVNXM4ukmmeXvefSXHmSvnX0W6rloK+nq6cRmWCRsjO9jbI3IORlrgQ4fEQQrw7Abw2/X1I61XGno7bf6duRBDhsVQzn50TScgjHNvPHUEjOAoqi2pd2z3o+ZO7Z70fMg1WotqXds96PmTu2e9HzINVqLal3bPej5k7tnvR8yDVai2pd2z3o+ZO7Z70fMg1WotqXds96PmTu2e9HzINVqLal3bPej5k7tnvR8yDVcu2mqJ6WohqKaWSGeF4fHJG4tcxwOQ5pHMEEZyr974brWrbe0iExRVt8q4yaWiPTh6d5J6GZ8OriCB0JFEdR3iov8Afa66VcdPFPVymV8dNEI42k+DWjoP5nqSTkoLE7G9omppamGybg1LqikfhkF0cMviPIATH9JuP0/bA9c5y220b2yMa5jmua4ZBacghasp4JqZzRPFJE5zGvaHtIy1wyCM+BBBBV0+yHraXUOip7DcJTJW2VzWROccl1O7PAPj4SHN+IcKCfEREBERAREQEREBERBUPtvVsjtS6aoS49zHSSTAeHE5+P8AowLwextaae4bn1VZUMa91voHyxZHtXuc1mfoud869Ptt+7qwfJp/qvXHYl93l++Tf7rEGbdoLYSK8MqdR6IphFdOclVb424bU+l8Y8JPEjo7w8721R2uq7ZXgtM9JWU0vUExyRPaf9iCCP2hbSjzChDfrY+m14HXiwugodQsYePLMMrcAYa8j2rh4PwfQfAgPH7P+/FJf6Sk09rKrbBfWkRQVkxAZWZPmgno2Tw5+29OThWHWrm72yusl0qLfc6aWkrqZ/BLDI3DmOH/AJnPQjmFZzYLtBvfLRab15M3n+Lp7vK/Bzy4WTZ/3HeZ9HF4uQWqRcNcCOo5rlAREQEREBEQlAUKb873W/RFvqbTp+pgq9Uu8wMA7xlJ6XSeHFjOG+nBIx1x/f3f5umqir03o4xT3dreCor+IOZSO8WtHMOeB18GnlzOQKfxMqrjWtjjZNU1dRJhrWgvfI9x6DxJJP8AvlB2XW5V15uM9ddKqasrZ3cUk0zi5zz8ZKsx2fNgXyyUuptd0rmRNIlo7XK3BceofMD4ehh6/pcuRyXYDYSPTjqfUOtIo57xgSU1EfOZSHrxO8HSejwb8ZwRYpBUrtuWanguOl7tDG1s88U1LIQMZbGWFvzcbliPY9rpKbd0U7CRHVUE0bx6ccLx9VSF24/ybpD99VfViUY9kn89FB/C1H1CgveiIgIiICIiAiIgIiIKcdtv3dWD5NP9V647Evu8v3yb/dYue237urB8mn+q9cdiX3eX75N/usQXIQoiCK95tnbLuHRTVLI2UWomR4grmZHGQOTJR0c3wzjiHLBxyNFNS6fummLxPa77RTUVbCcOjlHUekHo5p8CORWz9YNu1txatx9Nvt9xxBWRZfSVrWBz4H/92nxbnn8RAICtOwG/M+mXU2n9YzyVFj5RwVbsukox4A+Lo/5t8MjAVyaOqgraSGppJop6eZgkjlicHNe0jIc0jkQR4rW1uHoa9aAv5tV/gY2Qt7yKaN3FHMzJHE0/tHQ4I8Qs82H3prtAVsdtu75avTMr/Pi9s+lJ6vj+LPMt6HmRz6he9F59gvNvv9pprnZ6uKsoahvFHNEeTh/1BHQg8weRXoICIuivrKe30c9XWzxU9NAwySyyvDWsaOZJJ5AAIOyWRkUb3ve1rWDLnOOAB6Sqo9oLf+SaSTT+39eWQt4mVlzhx+MyMcELvAel45k44Tjmcb3933n1aamw6TllptPnMc1RjhkrfT8bYz6Op8cdFDujdK3nWV8itOnqJ9VWPBcQOTY2jq97jya0ZHM+kDqQEHnWy31t3uMNFbaWerrZ3cMcMLC97z8QCu9sbsdbdCR012vIbXan4SRMCe7peJuC2MeJwSC4j9mPH29kdp7ftvZPP7qrv1Q3/i60N6ePdx55hg+dx5nwAk9AAwEREFXu3H+TdIfvqr6sSjHsk/nooP4Wo+oVJ3bj/JukP31V9WJRj2Sfz0UH8LUfUKC96IiAiIgIiICIiAiIgpx22/d1YPk0/wBV647Evu8v3yb/AHWLntt+7qwfJp/qvXHYl93l++Tf7rEFyEREBeDrnVVu0Zpmtvd4k4aWmbnhb7aRx5NY0eJJ5fzPLJXq3SvpbXbqmuuE8dPSU0bpZZZDhrGgZJKoJvpupXbj6ie2B80GnqZ2KOkJIDsZHevHvzk/6QcDxJDHNzdc3TcHVMt5u3dscWCKCCLPBBGMkNGeZ5kknxJPTovFq7HdKK0UN1qqCpht1aXCmqXsIjlLTghp+Ig/MpF2C2mqtxb62prWSQ6bo5MVc45d64YPcsPviCMn9EHPUjN37tpSx3bTB0/XW2nktHciBtNwANjaBhvB70t5YI5jHJBRHZzdm8baXGT2MxtZaKlzTU0MjiAcY89h/RfjlnmCOoOBi9OhdZ2PXFkiuenq2OoicB3kRIEsDufmyM6tPI/EeoJGCqW7x7HXzQtZPWWyGouunTl7KqNnE+BvomaOmPf+1PxE4ES01TPSzNlpZpIZW9HxuLXD/cINm+qdSWjStnlud/r4KGij6vkPNx68LQObncjyAJVId8d6LjuJUuoKBr6HTkT+KOnzh9QRjD5cHBxjIaOQ+M81FNbW1dfN3tdUz1Mvv5pC93zlSDtTs/qPcKrhlp6aSisnF+NuU7MMDfHuwcd47kRy5A9SEGD2yyXO7QV09uoKmpioYTUVT4mEiGMdXOPgPs+JfbonVV10XqOlvNjmEVXAT5rxlkjT1Y8eLT/+jBAK2JaQ0ZY9J6aZZbRQQspO7DJ+KNpdUnhwXSnHnEjrnl4DlyVQO0rtGdE3f8OWGA/4drX82MHKjlP6H+g/o+jmPAZC2e1euKHcHR1JeqAd2934qpgJyYZgBxN/ZzBB8QQsvWuTaTcW6bc6mir6F8ktBIQ2souMhk7P2dA4ZyHeH7CQdhWn71btQ2elulmq4quhqW8cUsfQjxGDzBByCDzBBBQeiiIgq924/wAm6Q/fVX1YlGPZJ/PRQfwtR9QqTu3H+TdIfvqr6sSjHsk/nooP4Wo+oUF70REBERAREQEREBERBTjtt+7qwfJp/qvXHYl93l++Tf7rFz22/d1YPk0/1XrjsS+7y/fJv91iC5C4ccDqAuT0VYu1Tu7Lbg7R2mK7gqntcLpNEObGkcoWu8CQSXY5gYGeZCDB+01u87Vdym0xYJx+AaOXE00bjiskH/0aengSOLnyxGe1OgrhuJqyGz29wgjDTLU1TmlzYIx1cR4k5AA8SfAZI8DTNjuGpb9Q2i0wOnrauURRtA+cn0ADJJ8ACVsN2s29tG3enGW61x8dS8NdV1bh59RIBjiPob1w3oP2kkh7GjdMWzSGnaOzWWDuaOmbgZ5ue7xe4+LieZK9tEQcY55WD6i2l0JqKrfVXbTVDJUvOXyxcUDnn0kxluT8ZWcogj+ybNbe2WpbUUOlqEyt5tNSX1OD6QJHOAPxrPmMaxrWsAa1owAOgC/SIC+G+Wmhvlpq7bdadlTRVUZilieOTmn/AKH0HqDzX3Ig14b2ba1e22qTSF0lRaqoGWiqnNxxNzzY7w428s465B5ZwMg7Om7Emgb+LddpnHTVc/8AHDr7GkPIStHo5AOHo58yAFczX2jbRrnTk9nv1P3sD/OjkacPhkwQJGHwIyfiPQgg4Wu3W+lbnozU1ZZb1D3dVTu5OHNsjD7V7T4tI+zkQUGzGnmjqIY5YJGSxSND2PYctc0jIII6jC7FUjsrbu+wp4dGamqz7FlIZbJ5CMROJ/ySfQSfN9B5eIxbcdEFXu3H+TdIfvqr6sSjHsk/nooP4Wo+oVJ3bj/JukP31V9WJRj2Sfz0UH8LUfUKC96IiAiIgIiICIiAiIgpx22/d1YPk0/1Xr89iX3d375N/usX19t6jkbqjTVYQe6ko5IQf/k1+T9cKNtjNxoNtbnfbnJSuq6iot5gpos4aZe8YRxHwbgOJ/ZjxQWc7R27lPoixz2Wz1BOpq2HEZj/APaMdyMjj4OxnhHp59Bzo/S09Tca6KCnjlqauokDGMYC58j3HkB4kklfRfbtW3681l1uk7p62rldLNI7xcT/ACA6AdAMBW17Lm0BsNLHq7UlOPwpUszQ08jedNGRze7PR7geXi0fGSAGZ9nrauPbzTYqblDGdSVzc1bw4P7lmfNiafQORdjq7xIAUtoOSICIiAiIgIiICIiAo33z22g3G0hLSxNhjvVL+NoKiTlwu5cTCRz4XAYPoOD4KSEPNBq5vVrrbJdqu23SmfTVtLIYponjm1w/86jqridmPeCDUdppNKagqC2/UsfBTSyH/m4mjkM/rGgcweoGeZyvq7S+0DtaW86hsEf/AK/RRcL4Wj/nIxz4f9Y549PT0Yphbq2rs91pq6ilfTVtHM2WKQDzmPacg4PoI8UFpu3H+TdIfvar6sSjHsk/nooP4Wo+oV0b17rx7l6Y0q2am9jXahdP7NY0HuyXCMNcw+g8J5HmDy58ifS7H1HJUbvsnYPMpaGeR5/bwtH83ILyIiICIiAiIgIiICIiCGe1Vo6q1XtuJ7XTme4WqcVbWMZxPfFgtka3x8Wux48CoktqZHzqqm/PZ7q6m5VWodBU8T2SjvKi1tPC7jz5zofAg9eDlzBxnIACP+zDpzTF11f+EtV3e2wige00tuqpWsNTKfauw7k5rfQMnOM8ut6xjHLoVqxqqeekqJaeqikhnicWSRSNLXMcOoIPMH4l+RLK0ACR4HoDkG1BFqw7+b9a/wCkU7+b9a/6RQbT0WrDv5v1r/pFO/m/Wv8ApFBtPRasO/m/Wv8ApFO/m/Wv+kUG09Fqw7+b9a/6RTv5v1r/AKRQbT0WrDv5v1r/AKRTv5v1r/pFBtPRasO/m/Wv+kU7+b9a/wCkUG084PVUu7WOldM0N/dfdPXa2C4VM3d3C1QzMMrZMZ77gbzbnHnZxzIPPJUAd9KRgyPI/wBRSKOSaRkcTHPkeQ1rGjJcT0AHiUH4AyrndjrRj7NpCs1FXQOjq7s8Ng424Ip2dCPic4k/GGtKjzZHs83K7VtLeddUr6G0sPeMt8mWz1BGCA9v6DPTnzjjGBnKuLBFHBEyKJjWRsaGtY0YDQOQAHgEH7REQEREBERAREQEREBMIiDHdUaI0xqppGobHQV78cIlliHegegSDzh/sViB2B2yJydMM9dqfvFKKIIt8gG2XwYb67U/eJ5ANsvgw312p+8UpIgi3yAbZfBhvrtT94nkA2y+DDfXan7xSkiCLfIBtl8GG+u1P3ieQDbL4MN9dqfvFKSIIt8gG2XwYb67U/eJ5ANsvgw312p+8UpIgi3yAbZfBhvrtT94nkA2y+DDfXan7xSkiCLfIBtl8GG+u1P3ieQDbL4MN9dqfvFKSIIt8gO2XwYb67U/eLKNL7d6R0s9slh09b6SdvScRcco/ZI7Lv5rKkQAMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAoT393Hv+iNVaPoLG+mbT3SVzKgSxcZID428j4cnFTYqtdsVs79YaAbRvbHUl8oie4ZDX95Fgn4s4QWlRVB3worxs3q7TGorJqu+3OurxL7K/CVR3jZe6MZLCBgd27jxwfo8IwemMq3t1HfLd2ktA2y33m5UltqfYHf0kFU+OGXirJGu4mA4dloAORzAwgsooh1fr292vtCaV0fSPpxZrjRCedrosvLsz9HeA/Ft/msT3y1Derbv7tzbrdd7jSW+qmpBUU0FS+OKYOquEh7AcOyORyOnJeZvXQXa6dqPRtFp2ubb7lNamtZVuYH9y3jqjI8NPIuDA8geJx06oLOrGdxdbWjQGmpL3fnTexhI2FkUDQ6SV7s4a0EgZwHHmRyaVWrdKgvOyG4emrvY9U3y4UN0lc+phuFUZnzmMtEjZOQa8ObIMEjIOSCCAVJGtKduou1HpG1XP8ZbrTan3OCCRoDXTl7xxA9TgsjP7Y/25DIbdqTc7UdOK60aTstjoST3cN+rJfZMzfB3BGz8Xy/RdzB9IX703utx6zi0frSx1OndRzgmmzK2elqm4yDHKMc3edgEYy3hzxeaoY0pQR7l7fa73P1PU1rtT281Qtr4Kh0UdC2CnEsbYmjw4nkHOc9fbFxP5uNsmoNgNnZ7eyOW+x3+J9FIGgvBmkmlDBnwLhFnwJaEE8btbp2rbSK3C50Nwraq5d6KWGkY08TmcPJxLhgEvaOQcevJeR2f9zLluZbb5XXKio6OOlrBFTxU/ESIy3ID3E+c4dMgNB9AUnzUFHPW01ZPS08lZTB7YJ3xgyRB4AcGuIy3OBnHXAVdOxD7ktSfxzP6aCRN292ItEXO32G0WipvuqLizjp6KHLWtaSWhzjgk5IdgAdGnJbyJ/e2WodyLhfKii3D0nRWqldA+amq6Odr28TXMHduAkfzIeSDlvtTgHniAqqbVF67VeozpSOggvzDLBT1FcCYqVkcTY+9xg8ywYHIjMnTHNSLtpr7XVo3kO3249VSXSaphMlPV0sLWBrhF3owQ1mWcLXg5bniA54QetrHcDdSlqbrU6c2+pxY7ZPOySprakGSpiic7MkcfExwDmtyMNfnPLiWU7K7p0G6Flq6imo5KC4UT2sqqRz+8DA7i4HNfgcQIafAEEEYxgnGd7Llu3FVXKk0NZKWosDqPJq2FjqkOLTxhjTJkn0AMJJ6ZK8nsdzaWfo25RWCOsZe2PiN2NVglzi13dmMgY7vlJgHzgeLPUEhYFFgu9urqnQ+2d4vdv7r8IRhkVMJBkcb3tbnHiWgl2DyPCol0Fs1ddW6Rt+qdS661LHqOvgFZRy09WSyla8cUec+c7kQ4hrmYzwjpkhZRFWvcq8ag132gabbigvFwsljpY2urJKGThfMDB3ziSMHBDmxgHIB87B6LzLxb77sjuto6iseo7nW6VvtQ2nfSXCbvuH8ZG2bzQA0Ow9jmvaAeoORniC06KsGtLhqW69qmHS1s1XeLTbqmFoeynqHFjGexXPfwxk8AeQHYdg8LiHdQsduFs1VpDtAN0ZpbWF5FLfGRmWorpxPLwPbmWQ5GDKOB5a4AO6DPMkhcFFVyyWu57a9p6zafo9Q3a42e9U7qqaOtqDI6TiZMMyHGHOEkZcHAA4OPTm0aAiIgIiICIiAoI7ROgtS6v1doqt07bfZlNbpXOqn9/FH3YMkZ6PcCeTT0z0U7oggDtW7fan13/hb/AApbPZ/sL2V7I/4iKLg4+54fbubnPA7pnourtFbZ6uv2t9Pax0M2Grr7cyKIUznxxujfFK+VkoMhDXDLsFp5jA6gnFhEQVavGgd1dTbq6K1Xqi20Dm0tTSSTw0M8bY6GKOcOc0hzy5zvbOJaXdQATgAZJvPt9rfUO9Wn9RaODaOKht7WNuL5mBkUzXzuDHM4uMtdxNacNIw88jzCsCiCrw253N3L3Is943NpKG1We2Pjf7FimbJG5jXcTmRsZI88Ty0BznOHLpnhDVJG7+k723Vmndf6KpG199s3FT1NA6Tg9mUjuLLWuJwHN4345EnjzzLQ0yyiCqdNLtBR1lQ3UdZq/TUFZMaqp0fXxVEVJxkDDjDFGcty0Ob536I5ADhUhbQbZaVa216hpH6srILc+Vlqp9RPwynBP+dDDwtwHe2aSPQcBwBE1IgKEeyzobUWhtO3ul1TbvYM9TVMkib38cvE0MwTljnAc/SpuRBAu6e3mrrbuhTbibZR01Zc5GCGtt9TIGNeQzg4suc0FpaGgty0gtBGcnhbTbdaurNza3cTc5sFNdg10VFQwSBwiy3g4hwOLQwMLmhuXElxccEZdPSIIG1Ldd+6W6X2isVhtFbbX1M/sC4PkgE0cLnHu8AytblrSPbMPMc+Lx+rZHai+bb6I1G9lZSv1Xdaf8S0edBTyMY/ugSRk+c/LjjHIAZxkzeiCHNP6Q1jrrZ+96e3aqDT3esqT7HnjbA50MbRG6NxEXmn8Y12RkEgkZGcjA9KW7tAaSsX+FbZbbXUUMLzBS3OeeGR1PGTgOZmQEsHMgPjcQOWMANFn0QQHu/trquLcug3E2zbSzXiNrWVVHM9rTKQ3u+IcZDS0xngIy0jhBaSTkeVZNvNxde7nWjVe5zaSz0lmkilpqGlla8OcxweAxrXPABcAXOc7iPIDljhsiiCCarQWpZO1VR6wZbc6cjiLXVffxcj7EfH7Ti4/bED2v8AJdmpdCajre01YdWU1u49P0tO1k1V38Y4SI5RjgLuM83N6DxU5IghjWeitQXHtI6R1TRUHeWGgoBDU1XfRjgfmo5cBdxH/MZ0B6/EVM6IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k="
					}
				}
			}
		}
	},
	"messageTimestamp": "1627739664",
	"status": "ERROR"
}

const fgerub= (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": '',
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./lib/odc.jpeg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        
			switch(command) {

/*_________________
FITUR MENU BOT
___________________*/

/*case 'menu':
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`Hai ${pushname} ${ucapanWaktu} saya mitsuha bot whatsapp akan membantu untuk membuat sticker dll`
sendButLocation(from, `${teks}`, `©Mitsuhabot Whatsapp`, {jpegThumbnail:fakeimage}, [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1},{buttonId:`LIST MENU`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`PLAY GAME`,buttonText:{displayText:'PLAY GAME'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break*/

case 'menu':
case 'help':
getLevel3 = getLevelingLevel(sender)
mani = fs.readFileSync('./lib/luffy.jpeg')
num = `${sender.split("@")[0]}@s.whatsapp.net`
creator = "6285731261728@s.whatsapp.net"
hai = `Hai ${pushname} ${ucapanWaktu} saya mitsuha bot whatsapp akan membantu untuk membuat sticker dll`
gbutsanguy = [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1},{buttonId:`LIST MENU`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`PLAY GAME`,buttonText:{displayText:'PLAY GAME'},type:1}]
mhan1 = await client.prepareMessage(from, mani, image)
gbuttonan = {
imageMessage: mhan1.message.imageMessage,
contentText: `${hai}`,
footerText: "Mitsuha",
buttons: gbutsanguy,
headerType: 4
}             
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./lib/Cp.jpeg'),
caption: `${hai}`,
"contextInfo": {
mentionedJid: [hai, num],
"externalAdReply": {
"title": `BOT BY MITSUHA`,
"body": `Time: ${time}`,
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/Cp.jpeg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}},
quoted: 
mek})
break

case 'allmenu':
case 'llmenu':
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`*HELLO ${pushname} ${ucapanWaktu}*`
sendButLocation(from, `${teks}`, `҂🐋「 *PROFILE KAMU* 」
҂🐋 • nama ${pushname}
҂🐋 • setatus ${premi}
҂🐋 • pangkat ${role}
҂🐋 • level ${getLevel3}
҂🐋 • xp ${getLevelingXp(sender)}

҂🐋「 *INFORMASI MENU* 」
҂🐋 • ${prefix2}info
҂🐋 • ${prefix2}iklan
҂🐋 • ${prefix2}donasi

҂🐋「 *PRODUK & BARANG* 」
҂🐋 • ${prefix2}produk
҂🐋 • ${prefix2}tambah

҂🐋「 *KRITIK & ULASAN* 」
҂🐋 • ${prefix2}ulasan

҂🐋「 *GROUP MENU* 」
҂🐋 • ${prefix2}sider
҂🐋 • ${prefix2}hidetag
҂🐋 • ${prefix2}fitnah
҂🐋 • ${prefix2}setclose
҂🐋 • ${prefix2}setopen
҂🐋 • ${prefix2}add
҂🐋 • ${prefix2}kick
҂🐋 • ${prefix2}grup
҂🐋 • ${prefix2}promote
҂🐋 • ${prefix2}demote
҂🐋 • ${prefix2}tagall
҂🐋 • ${prefix2}simih
҂🐋 • ${prefix2}antilink
҂🐋 • ${prefix2}welcome

҂🐋「 *ANIME MENU* 」
҂🐋 • ${prefix2}neko
҂🐋 • ${prefix2}waifu

҂🐋「 *GAMES MENU* 」
҂🐋 • ${prefix2}dungeon
҂🐋 • ${prefix2}slot
҂🐋 • ${prefix2}truth
҂🐋 • ${prefix2}dare

҂🐋「 *IMAGE MENU* 」
҂🐋 • ${prefix2}cogan
҂🐋 • ${prefix2}cecan
҂🐋 • ${prefix2}pinterest
҂🐋 • ${prefix2}ocr
҂🐋 • ${prefix2}wait

҂🐋「 *RANDOM MENU* 」
҂🐋 • ${prefix2}cerpen
҂🐋 • ${prefix2}cerita_horor
҂🐋 • ${prefix2}film
҂🐋 • ${prefix2}gcwa
҂🐋 • ${prefix2}fake_data

҂🐋「 *STICKER MENU* 」
҂🐋 • ${prefix2}sticker
҂🐋 • ${prefix2}wasted
҂🐋 • ${prefix2}comrade
҂🐋 • ${prefix2}jail
҂🐋 • ${prefix2}passed
҂🐋 • ${prefix2}trigger
҂🐋 • ${prefix2}toimg

҂🐋「 *PREMIUM MENU* 」
҂🐋 • ${prefix2}fast
҂🐋 • ${prefix2}tupai
҂🐋 • ${prefix2}gemuk
҂🐋 • ${prefix2}slow
҂🐋 • ${prefix2}tomp3
҂🐋 • ${prefix2}mining

҂🐋「 *OTHER MENU* 」
҂🐋 • ${prefix2}sharelock
҂🐋 • ${prefix2}delete
҂🐋 • ${prefix2}pesan
҂🐋 • ${prefix2}owner
҂🐋 • ${prefix2}report

҂🐋「 *OWNER MENU* 」
҂🐋 • ${prefix2}leave
҂🐋 • ${prefix2}clone
҂🐋 • ${prefix2}bc
҂🐋 • ${prefix2}addprem
҂🐋 • ${prefix2}dellprem
҂🐋 • ${prefix2}addrespon
҂🐋 • ${prefix2}makegroup

҂🐋「 *THANKS TO* 」
҂🐋 • mhankbarbar
҂🐋 • rimurubotz
҂🐋 • dimxbotz
҂🐋 • rurichan
҂🐋 • zak06cheat
҂🐋 • ridwan
҂🐋 • hafizh`, {jpegThumbnail:fakeimage}, [{buttonId:`BERI NILAI`,buttonText:{displayText:'BERI NILAI'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break

/*_________________
ALL FITUR BOT
___________________*/
		
case 'produk':
if (!isRegistered) return fakeitem(ind.noregis())   
data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
client.relayWAMessage(prep)
break

case '+tambah':
case 'tambah':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isQuotedImage) return fakeitem('reply foto produk lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas')
if(!q) return reply(`reply foto produk lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas`)
nmapro = q.split('|')[0]
nmorpro = q.split('|')[1]
biopro = q.split('|')[2]
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
if(!nmorpro) return reply('Format salah!')
if(!biopro) return reply('Format salah!')
H1 = {
nama : nmapro,
nomor : nmorpro,
deskripsi : biopro
}
produk.push(H1)
fs.writeFileSync(`./lib/${nmorpro}.jpeg`, delb)
fs.writeFileSync('./lib/produk.js', JSON.stringify(produk))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: fkatalok})		     	 
break

case 'fitnah':
if (!isRegistered) return fakeitem(ind.noregis())
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
if (args.length < 1) return fakeitem(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var ainegs = body.slice(8)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = ainegs.split("|")[0];
var target = ainegs.split("|")[1];
var bot = ainegs.split("|")[2];
client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
break

case 'hidetag':                 
if (!isRegistered) return fakeitem(ind.noregis())
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text, {quoted: faketag})
break
					
case 'close-grup':
case 'close-grub':      
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
var nomor = mek.participant
const close = {
text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break

case 'open-grup':
case 'open-grub':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
open = {
text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,             
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
break
              
case 'setclose':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴𝑰𝑻??𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
gwekyyke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Pilih Satu Aja Ya Njg`,
"buttons": [
{buttonId: '5 menit', buttonText: {displayText: '5 menit'}, type: 1},
{buttonId: '10 menit', buttonText: {displayText: '10 menit'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwekyyke)
break

case 'setopen':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴??𝑻??𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
gwetkke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Pilih Satu Aja Ya Njg`,
"buttons": [
{buttonId: '5 menit >', buttonText: {displayText: '5 menit >'}, type: 1},
{buttonId: '10 menit >', buttonText: {displayText: '10 menit >'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwetkke)
break

case 'grup buka':
case 'grup tutup':
case 'group buka':
case 'group tutup':
case 'grup':
case 'group':
case 'grub':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴𝑰𝑻??𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
let gwekke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Jika Tidak Muncul Tombol Silahkan Ketik .open-grup atau .close-grup`,
"buttons": [
{buttonId: 'Buka', buttonText: {displayText: 'Buka'}, type: 1},
{buttonId: 'Tutup', buttonText: {displayText: 'Tutup'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok})
await client.relayWAMessage(gwekke)
break
      
case 'welcome-enable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (isWelkom) return fakeitem('「 SUDAH ON KAWAN 」')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
break
						
case 'welcome-disable':
if (!isRegistered) return fakeitem(ind.noregis())    
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
var ini = welkom.indexOf(from)
welkom.splice(ini, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
break

case 'welcome':
case 'welcome 1':
case 'welcome 0':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴??𝑻𝑺𝑼𝑯𝑨 ??𝑶𝑻??`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
let gwekkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Jika Tidak Muncul Tombol Silahkan Ketik .${command}-enable atau .${command}-disable`,
"buttons": [
{buttonId: 'Enable W1', buttonText: {displayText: 'Enable W1'}, type: 1},
{buttonId: 'Disable W0', buttonText: {displayText: 'Disable W0'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwekkje)
break

case 'antilink':
case 'antilink 1':
case 'antilink 0':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
let gwekkkje = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Jika Tidak Muncul Tombol Silahkan Ketik .${command}-enable atau .${command}-disable`,
"buttons": [
{buttonId: 'Enable A1', buttonText: {displayText: 'Enable A1'}, type: 1},
{buttonId: 'Disable A0', buttonText: {displayText: 'Disable A0'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok})
await client.relayWAMessage(gwekkkje)
break

case 'antitoxic':
case 'antitoxic 1':
case 'antitoxic 0':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
let gwekkkj1e = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Jika Tidak Muncul Tombol Silahkan Ketik .${command}-enable atau .${command}-disable`,
"buttons": [
{buttonId: 'Enable T1', buttonText: {displayText: 'Enable T1'}, type: 1},
{buttonId: 'Disable T0', buttonText: {displayText: 'Disable T0'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok})
await client.relayWAMessage(gwekkkj1e)
break

case 'leveling':
case 'leveling 1':
case 'leveling 0':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
let gwekkkjiie = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Jika Tidak Muncul Tombol Silahkan Ketik .${command}-enable atau .${command}-disable`,
"buttons": [
{buttonId: 'Enable L1', buttonText: {displayText: 'Enable L1'}, type: 1},
{buttonId: 'Disable L0', buttonText: {displayText: 'Disable L0'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok})
await client.relayWAMessage(gwekkkjiie)
break

case 'tagall':
case 'tagall1':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*-->* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
          
case 'antilink-enable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© ??𝒀 - 𝑴𝑰??𝑺𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (isAntiLink) return fakeitem('Sudah Aktif Kak')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
fakeitem('「 SUKSES 」Fitur Anti Link Diaktifkan')
break
					
case 'antilink-disable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})    
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isAntiLink) return fakeitem('Sudah Mati Kak')
var ini = antilink.indexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
fakeitem('「 SUKSES 」Fitur Anti Link Dimatikan')
break

case 'antitoxic-disable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
var ini = antitoxic.indexOf(from)
antitoxic.splice(ini, 1)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
fakeitem('「 BERHASIL DI MATIKAN 」')
break
						
case 'antitoxic-enable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (isAntiToxic) return fakeitem('「 SUDAH AKTIF 」')
antitoxic.push(from)
fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
reply('「 BERHASIL DI AKTIFKAN 」 ')
break

case 'leveling-enable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (isLevelingOn) return fakeitem('fitur level sudah aktif sebelum nya')
_leveling.push(from)
fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
fakeitem('「 BERHASIL DI AKTIFKAN 」')
break

case 'leveling-disable':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
var ini = _leveling.indexOf(from)
_leveling.splice(ini, 1)
fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
fakeitem('「 BERHASIL DI MATIKAN 」')
break
        
case 'sider':
if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
                                
case 'promote':                                   
if (!isRegistered) return fakeitem(ind.noregis())
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break

case 'demote':   
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
					
//case 'add':\\   
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (args.length < 1) return fakeitem('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return fakeitem('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
					
case 'add':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
reply(`MAAF FITUR DI MATIKAN OWNER`)
break

case 'kick':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - ??𝑰𝑻𝑺𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeitem('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
for (let _ of mentioned) {
teks = `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
client.groupRemove(from, mentioned)
}
break
                
case 'simih':
if (!isOwner) return fakeitem(`\`\`\`▢ KHUSUS OWNER BOT ▢\`\`\``)     
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (args.length < 1) return fakeitem('1 untuk mengaktifkan, 0 untuk menonaktifkan')
if (Number(args[0]) === 1) {
if (isSimi) return fakeitem('Mode simi sudah aktif')
samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukses mengaktifkan mode simi di group ini ✔️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sukes menonaktifkan mode simi di group ini ✔️')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
			
case 'mining':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
wan = 99999
addLevelingLevel(sender, 500) 
addLevelingXp(sender, wan)
getLevel = getLevelingLevel(sender)
reply(`Usaha Yg Bagus Level Mu Naik Menjadi ${getLevel}🍷Dan Xp Mu Bertambah Menjadi ${getLevelingXp(sender)}🔥`)
break
              
case 'addprem':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isOwner) return fakeitem(`\`\`\`▢ KHUSUS OWNER BOT ▢\`\`\``)    
if (args.length < 1) return fakeitem(`contoh ${prefix + command} 6285298595430\n\natau bisa juga dengan ${prefix + command} tag target`)
adpr = body.slice(10)
premium.push(`${adpr}@s.whatsapp.net`)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply(`Berhasil Menambahkan ${adpr} Ke Daftar Premium`)
break
					
case 'dellprem':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isOwner) return fakeitem(ind.ownerb())
din02 = body.slice(11)
delp = premium.indexOf(din02)
premium.splice(delp, 1)
fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
reply(`Berhasil Menghapus ${din02} Dari Daftar Premium`)
break				
					
case 'leave':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
gwetkkkke = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
"footerText": `Pilih Satu Aja Ya Njg`,
"buttons": [
{buttonId: 'LEAVE NOW', buttonText: {displayText: 'LEAVE NOW'}, type: 1},
{buttonId: 'LEAVE TIME', buttonText: {displayText: 'LEAVE TIME'}, type: 1}
],
headerType: 1
},
}, {quoted:mek})
await client.relayWAMessage(gwetkkkke)
break
                    
case 'clone':
if (!isRegistered) return fakeitem(ind.noregis())   
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
if (!isOwner) return fakeitem(`\`\`\`▢ KHUSUS OWNER BOT ▢\`\`\``)     
if (args.length < 1) return fakeitem('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeitem('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await client.getProfilePicture(id)
buffer = await getBuffer(pp)
client.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Gagal om')
}
break

case 'bc':
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isOwner) return fakeitem(`\`\`\`▢ KHUSUS OWNER BOT ▢\`\`\``)     
if (args.length < 1) return fakeitem('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, MessageType.image, {caption: `${body.slice(4)}\n\n_*BROADCAST*_`})
}
reply('Suksess broadcast ')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}\n\n_*BROADCAST*_`)
}
reply('Suksess broadcast ')
}
break

case 'gcwa':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/gc.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
let g = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*RANDOM GRUP WHATSAPP*\n\n*LINK 1*\n${randKey.result.title}\n\n*LINK 2*\n${randKey2.result.title}`,
"description": `.`,
"footerText": "Untuk Menampilkan Link Selanjutnya Pilih Tombol Di Bawah",
"buttons": [
{buttonId: 'NEXT 🕊', buttonText: {displayText: 'NEXT 🕊'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(g)
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'addrespon':   
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
if (args.length < 1) return
kunci = args[0]
respon = args[1]
setting.kunci = kunci
setting.respon = respon
fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
reply(`SUKSES KAYAK MIE SUKSES`)
break

case 'ppcouple':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return fakeitem(ind.noregis())
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴??𝑻??𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
data = fs.readFileSync('./lib/ppcouple.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
Laki = await getBuffer(randKey.result.laki)
client.sendMessage(from, Laki, image,  { caption: '*_Nih kak_*', quoted: mek })
Cewe = await getBuffer(randKey.result.cewek)
client.sendMessage(from, Cewe, image, { caption: '*_Nih kak_*', quoted: mek })
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'cerpen':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/cerpen.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
reply(`*Tittle*: ${randKey.result.title}\n\n*Creator*: ${randKey.result.creator}\n\n*Cerpen*: ${randKey.result.cerpen}`)
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'fake_data':
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/fdata.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let o = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*KUMPULAN FAKE DATA ( PALSU )*\n\n*NAMA*: ${randKey.result.name}\n*BIRTHDAY*: ${randKey.result.birthday}\n*ADDRESS*: ${randKey.result.address}\n*CITY*: ${randKey.result.city}\n*REGION*: ${randKey.result.region}\n*COUNTRY*: ${randKey.result.country}\n*ZIP*: ${randKey.result.zip}\n*PHONE NUMBER*: ${randKey.result.phone_number}\n*USERNAME*: ${randKey.result.username}\n*PASSWORD*: ${randKey.result.password}\n*EMAIL*: ${randKey.result.email}`,
"description": `.`,
"footerText": "Ingat, Jangan Menyalah gunakan Data",
"buttons": [
{buttonId: 'SELANJUTNYA', buttonText: {displayText: 'SELANJUTNYA'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(o)
break

case 'cerita_horor':
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/horor.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`⫹⫺ ${command} ⫹⫺`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'CERITA - HOROR', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Story*: ${randKey.result.story}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cecan':
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
buttons = [{buttonId:`⫹⫺ ${command} ⫹⫺`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'CEWEK CANTIK', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'cogan':
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/apirandom.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
buttons = [{buttonId:`⫹⫺ ${command} ⫹⫺`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'COWOK GANTENG', imageMessage: imageMsg,
contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'asupan':
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return fakeitem(ind.noregis())
if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
data = fs.readFileSync('./lib/asupan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buff = await getBuffer(randKey.result)
client.sendMessage(from, buff, video, {quoted: mek, caption: `${randKey.result}`})
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break

case 'film':
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/film.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`SEARCHING`,buttonText:{displayText:`SEARCHING`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'RANDOM - FILM', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Views*: ${randKey.result.views}\n\n*Duration*: ${randKey.result.duration}\n\n*Genre*: ${randKey.result.genre}\n\n*Tahun*: ${randKey.result.tahun}\n\n*Ratting*: ${randKey.result.rating}\n\n*Link*: ${randKey.result.link}\n\n*Actors*: ${randKey.result.actors}\n\n*Location*: ${randKey.result.location}\n\n*Release*: ${randKey.result.date_release}\n\n*Language*: ${randKey.result.language}\n\n*Link Download*: ${randKey.result.link_dl}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break

case 'sharelock':
if (args.length < 1) return fakeitem(`Contoh : ${prefix2}sharelock Mitsuha|Mitsuha`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
client.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
			
case  'trigger':
        if (!isRegistered) return fakeitem(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		
		case  'passed':
		if (!isRegistered) return fakeitem(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'jail':
		if (!isRegistered) return fakeitem(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'comrade':
		if (!isRegistered) return fakeitem(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'wasted':
		if (!isRegistered) return fakeitem(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		
   case 'makegroup':
     	
				if (!isRegistered) return fakeitem(ind.noregis())
     
				if (!isOwner) return fakeitem(`\`\`\`▢ KHUSUS OWNER BOT ▢\`\`\``)
				const aineloh = body.slice(11)
				const ainenihh = aineloh.split("|")[0]
				const okelahh = aineloh.split("|")[1].replace("@","")
				if (args.length < 1) return fakeitem(`Textnya Mana?? contoh *$${command} @tagmem | MITSUHA*`)
				client.groupCreate(`${ainenihh}`, [`62858266304780@s.whatsapp.net`,`${okelahh}@s.whatsapp.net`])
				reply('_Sucses creategroup_')
			break
 case 'pesan':
                   		
				if (!isRegistered) return fakeitem(ind.noregis())
				if (args.length < 1) return fakeitem(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix2}${command} +codenegara|halo kak\n\nEx :\n${prefix2}${command} +6289654360447|halo kak\nError :\n${prefix2}${command} +62 8xx-xxx-xxx|halo kak\nError Auto Banned!`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					client.sendMessage(`${F1}@s.whatsapp.net`, `Pengirim : ${pushname}\nPesan : ${F2}`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					fakeitem('Berhasil mengirim pesan...')
				break
				
                
					
          
            case 'iklan':
                           
				if (!isRegistered) return fakeitem(ind.noregis())     
                           
                          youuke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`💷 *LIST HARGA SEWA BOT BY MITSUHA BOT WHATSAPP* 💷

IDR 5.000
No Premium
Premium Feature           No
Bonus Xp/Level              No
Expired                             14 Day
__________________________________
IDR 10.000
No Premium
Premium Feature           No
Bonus Xp/Level              No
Expired                             30 Day
__________________________________
IDR 15.000
Yes Premium
Premium Feature           Yes
Bonus Xp/Level              Yes
Expired                              -
`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok, thumbnail: Buffer.alloc(0)})
              client.relayWAMessage(prep)
            break
            
             
    
              
              case 'dungeon':
				
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`START`,buttonText:{displayText:'START'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/dg.png`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Menyambungkan Server...`, imageMessage: imageMsg,
              contentText:`*DUNGEON ISEKAI*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
            case 'slot':
            
              youke = fs.readFileSync('./lib/odc.jpeg')
            const p = hewan[Math.floor(Math.random() * hewan.length)]
              const p2 = hewan[Math.floor(Math.random() * hewan.length)]
              const p3 = hewan[Math.floor(Math.random() * hewan.length)]
		      buttons = [{buttonId:`SPIN`,buttonText:{displayText:'SPIN'},type:1},{buttonId:`GET`,buttonText:{displayText:'GET'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Tanggal ${date}\n©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`[  🎰 | SLOTS ]\n-----------------\n${p}\n${p2}<=====\n${p3}\n[  ?? | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : ??<=====`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              client.relayWAMessage(prep)
             
              break
              
              case 'author':
              case 'owner':
              case 'creator':
                 
				if (!isRegistered) return fakeitem(ind.noregis())     
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkatalok})
                  huu = fs.readFileSync('./lib/odc.jpeg')
                 huuu = (`\`\`\`I N F O  -   O W N E R\`\`\`\n\n\`\`\`About Me : Islam, 2007, Yogyakarta, Smp, Wibu Nolep\`\`\``)
                 client.sendMessage(from, huu, image, {quoted: fkatalok, caption: huuu})
                  break
                 
                  case 'toimg':
                     
				if (!isRegistered) return fakeitem(ind.noregis())     
					if (!isQuotedSticker) return fakeitem('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return fakeitem('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, MessageType.image)
						fs.unlinkSync(ran)
					})
					break
					case 'donasi':
if (!isRegistered) return fakeitem(ind.noregis())
youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId: `Pulsa`,buttonText:{displayText: `Pulsa`},type:1},{buttonId:`Dana`,buttonText:{displayText:'Dana'},type:1},{buttonId:`Gopay`,buttonText:{displayText:'Gopay'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`INGIN DONASI MELALUI SAWERIA? LANGSUNG CEK WEBSITE INI YUK!! https://www.saweria.co/MitsuhaBot`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              

break


                  
					

				case 'daftar':
				case 'regist':
				case 'verify':
				case 'erify':

				if (isRegistered) return  reply(`「 SUDAH DAFTAR SEBELUMNYA」`)
				const seriTod = createSerial(15)
				veri = sender
              _registered.push(sender)
				fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
				addRegisteredUser(sender, seriTod)
                getLevel3 = getLevelingLevel(sender)
                
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`⋮☰ PANDUAN`,buttonText:{displayText:'⋮☰ PANDUAN'},type:1},{buttonId:`↪ HOME`,buttonText:{displayText:'↪ HOME'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Peringatan : Silahkan Gunakan Bot Sebaik Mungkin Dan Jangan Spam Command Ke Bot.`, imageMessage: imageMsg,
              contentText:`「 \`\`\`SUKSES REGISTRASI\`\`\` 」\n\n
\`\`\`❏ Nama: ${pushname}\`\`\`
\`\`\`❏ No: wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`❏ Ns: ${seriTod}\`\`\`
\`\`\`❏ Total Pengguna: ${_registered.length}\`\`\`
`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              client.relayWAMessage(prep)
              
              break

				case 'wait':
				   
				if (!isRegistered) return fakeitem(ind.noregis())     
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: freply, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
					case 'info':
if (!isRegistered) return fakeitem(ind.noregis())
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
linkgc = await client.groupInviteCode (from)
me = client.user
uptime = process.uptime()
creator = "6285731261728@s.whatsapp.net"
teks =`*〔INFO MITSUHA WHATSAPP〕*\n
🤖 nama : ${me.name}
📞 nomor : ${me.jid.split('@')[0]}
#⃣ prefix : MULTI PREFIX
⌚ runtime : ${kyun(uptime)}
📩 total hit : ${hit_today.length}
⭐ pengguna premium : ${premium.length}
👥 total pengguna : ${_registered.length}
🗃 total chat : ${tchat}
📦 block kontak : ${blocked.length}

*〔INFO GROUP WHATSAPP〕*\n
💻 antilink : ${anlink}
🛠 antitoxic : ${anto}
🗡 leveling : ${lepel}
🔮 simisimi : ${sim}
🗑 pengguna antilink : ${antilink.length}
🔧 pengguna antitoxic : ${antitoxic.length}
💷 pengguna leveling : ${_leveling.length}
📮 pengguna simisimi : ${samih.length}
🎁 link grup : https://chat.whatsapp.com/${linkgc}`
sendButLocation(from, `${teks}`, `INFO BOT - INFO GROUP`,{jpegThumbnail:fakeimage}, [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break
					
				
				case 'ocr':
				   
				if (!isRegistered) return fakeitem(ind.noregis())     
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
			    case 'del':
		        case 'hapus':
		        case 'delete':
		   
				if (!isRegistered) return fakeitem(ind.noregis())     
			    client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
				

					case 'neko':
if (!isRegistered) return fakeitem(ind.noregis())
			  E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
			  client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek}) 
			  B10 = (await fetchJson(`https://nekos.life/api/v2/img/neko`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(B10.url))
		      buttons = [{buttonId:`⫹⫺ ${command} ⫹⫺`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok, thumbnail: Buffer.alloc(0)})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
			break
				

			
			
			
				
			
case 'truth':
					
				if (!isRegistered) return fakeitem(ind.noregis())
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: fkatalok })
					break

				case 'dare':
					
				if (!isRegistered) return fakeitem(ind.noregis())
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: fkatalok, caption: '*Dare*\n\n' + der })
					break
			
					
				
				
				case 'waifu':
			if (!isRegistered) return fakeitem(ind.noregis())
              let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
		      buttons = [{buttonId:`⫹⫺ ${command} ⫹⫺`,buttonText:{displayText:`⫹⫺ ${command} ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'© Mitsuhabot', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              

					
              

          
case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return fakeitem(`\`\`\`▢ TEKS NYA MANA KAK ▢\`\`\``)
					data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&q=${body.slice(10)}`, { method: 'get' })
					ahu = data.data
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(ahu));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*` })
					break
					
					
					case 'slow':
					
				if (!isRegistered) return fakeitem(ind.noregis())
					
				if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return fakeitem('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				
				if (!isRegistered) return fakeitem(ind.noregis())
				
				if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return fakeitem('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tomp3':
				              
				if (!isRegistered) return fakeitem(ind.noregis())
              
				if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
if (isQuotedVideo || isQuotedAudio){
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakeitem(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
fs.unlinkSync(ran)
})
} else {
reply(mess.wrongFormat)
}
break
              case 'tupai':
              
				if (!isRegistered) return fakeitem(ind.noregis())
              
				if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return fakeitem('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
				
				if (!isRegistered) return fakeitem(ind.noregis())
				
				if (!isPrem) return fakeitem(`\`\`\`▢ KHUSUS PENGGUNA VIP ▢\`\`\``) 
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return fakeitem('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
				
				
			
				case 'stiker':
				case 'sticker':
				case 'stikergif':
				case 'stickergif':
				   
				if (!isRegistered) return fakeitem(ind.noregis())
				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`MITSUHA`,`BOT`)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix2}sticker atau tag gambar yang sudah dikirim`)
					}
					break
				

					case 'report':
					   
				if (!isRegistered) return fakeitem(ind.noregis())     
                    const pesan = body.slice(8)
                    if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text)
                    var nomor = mek.participant
                    const teks1 = `*REPORT*\nUser : @${nomor.split("@s.whatsapp.net")[0]}\nNomor : ${sender.split("@")[0]}\nPesan : ${pesan}`
                    var options = {
                    text: teks1,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                   client.sendMessage('62857312617281@s.whatsapp.net', options, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩𝒀 - 𝑴𝑰𝑻??𝑼𝑯𝑨 𝑩????𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: fkatalok})
                    reply('Maaf ketidak nyamanan nya, kami akan memperbaikin nya secepatnya.\n\n-> Laporan main main akan dibanned dan ditegur Owner bot')
                    break 
               
		     
              case 'ulasan':
		      if (!isRegistered) return fakeitem(ind.noregis())
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId: `👍`,buttonText:{displayText: `👍`},type:1},{buttonId: `👎`,buttonText:{displayText: `👎`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
              contentText:`*TENTANG BOT INI*\nBeri Nilai Pada Kualitas Bot Ini\n#BERINILAI #RATINGBOT\n\n*TOTAL RATING*\n${date} - ${time}\nJumlah Suka ${like.length}\nJumlah Tidak Suka ${dislike.length}\n\n*KONTAK DEVELOPER*\nALAMAT\n_Yogyakarta - Godean - Guyangan_\nNUMBER PHONE\n_wa.me/6285731261728_\nABOUT ME\n_Lahir Pada 2007, Laki Laki_`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
              

case 'bug':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {

client.relayWAMessage(global.mm=client.
prepareMessageFromContent(from, client.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
}
break
default:             
if (buttonsR === 'Pulsa') {
fakeitem(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285731261728_`)
break
}
if (buttonsR === 'Gopay') {
fakeitem(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285826630478_`)
break
}
if (buttonsR === 'Dana') {
fakeitem(`INGIN DONASI BOT AGAR TETAP ON? KALIAN BISA KIRIM SALDO ATAU LAINYA KE NOMOR BOT YA.\nNOMOR : _+6285731261728_`)
break
}
if (buttonsR === 'DONASI') {
	if (!isRegistered) return fakeitem(ind.noregis())
	uptime = process.uptime()
youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId: `Pulsa`,buttonText:{displayText: `Pulsa`},type:1},{buttonId:`Dana`,buttonText:{displayText:'Dana'},type:1},{buttonId:`Gopay`,buttonText:{displayText:'Gopay'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`INGIN DONASI MELALUI SAWERIA? LANGSUNG CEK WEBSITE INI YUK!! https://www.saweria.co/MitsuhaBot`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              
              break
}

if (buttonsR === 'OWNER BOT') {
	if (!isRegistered) return fakeitem(ind.noregis())
	client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkatalok})
	break
	}


if (buttonsR === 'OWNER') {
	if (!isRegistered) return fakeitem(ind.noregis())
client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkatalok})
break
}



if (buttonsR === 'LIST MENU') {
if (!isRegistered) return fakeitem(ind.noregis())
getLevel3 = getLevelingLevel(sender)
creator = "6285731261728@s.whatsapp.net"
teks =`*HELLO ${pushname} ${ucapanWaktu}*`
sendButLocation(from, `${teks}`,`҂🐋「 *PROFILE KAMU* 」
҂🐋 • nama ${pushname}
҂🐋 • setatus ${premi}
҂🐋 • pangkat ${role}
҂🐋 • level ${getLevel3}
҂🐋 • xp ${getLevelingXp(sender)}

҂🐋「 *INFORMASI MENU* 」
҂🐋 • ${prefix2}info
҂🐋 • ${prefix2}iklan
҂🐋 • ${prefix2}donasi

҂🐋「 *PRODUK & BARANG* 」
҂🐋 • ${prefix2}produk
҂🐋 • ${prefix2}tambah

҂🐋「 *KRITIK & ULASAN* 」
҂🐋 • ${prefix2}ulasan

҂🐋「 *GROUP MENU* 」
҂🐋 • ${prefix2}sider
҂🐋 • ${prefix2}hidetag
҂🐋 • ${prefix2}fitnah
҂🐋 • ${prefix2}setclose
҂🐋 • ${prefix2}setopen
҂🐋 • ${prefix2}add
҂🐋 • ${prefix2}kick
҂🐋 • ${prefix2}grup
҂🐋 • ${prefix2}promote
҂🐋 • ${prefix2}demote
҂🐋 • ${prefix2}tagall
҂🐋 • ${prefix2}simih
҂🐋 • ${prefix2}antilink
҂🐋 • ${prefix2}welcome

҂🐋「 *ANIME MENU* 」
҂🐋 • ${prefix2}neko
҂🐋 • ${prefix2}waifu

҂🐋「 *GAMES MENU* 」
҂🐋 • ${prefix2}dungeon
҂🐋 • ${prefix2}slot
҂🐋 • ${prefix2}truth
҂🐋 • ${prefix2}dare

҂🐋「 *IMAGE MENU* 」
҂🐋 • ${prefix2}cogan
҂🐋 • ${prefix2}cecan
҂🐋 • ${prefix2}pinterest
҂🐋 • ${prefix2}ocr
҂🐋 • ${prefix2}wait

҂🐋「 *RANDOM MENU* 」
҂🐋 • ${prefix2}cerpen
҂🐋 • ${prefix2}cerita_horor
҂🐋 • ${prefix2}film
҂🐋 • ${prefix2}gcwa
҂🐋 • ${prefix2}fake_data

҂🐋「 *STICKER MENU* 」
҂🐋 • ${prefix2}sticker
҂🐋 • ${prefix2}wasted
҂🐋 • ${prefix2}comrade
҂🐋 • ${prefix2}jail
҂🐋 • ${prefix2}passed
҂🐋 • ${prefix2}trigger
҂🐋 • ${prefix2}toimg

҂🐋「 *PREMIUM MENU* 」
҂🐋 • ${prefix2}fast
҂🐋 • ${prefix2}tupai
҂🐋 • ${prefix2}gemuk
҂🐋 • ${prefix2}slow
҂🐋 • ${prefix2}tomp3
҂🐋 • ${prefix2}mining

҂🐋「 *OTHER MENU* 」
҂🐋 • ${prefix2}sharelock
҂🐋 • ${prefix2}delete
҂🐋 • ${prefix2}pesan
҂🐋 • ${prefix2}owner
҂🐋 • ${prefix2}report

҂🐋「 *OWNER MENU* 」
҂🐋 • ${prefix2}leave
҂🐋 • ${prefix2}clone
҂🐋 • ${prefix2}bc
҂🐋 • ${prefix2}addprem
҂🐋 • ${prefix2}dellprem
҂🐋 • ${prefix2}addrespon
҂🐋 • ${prefix2}makegroup

҂🐋「 *THANKS TO* 」
҂🐋 • mhankbarbar
҂🐋 • rimurubotz
҂🐋 • dimxbotz
҂🐋 • rurichan
҂🐋 • zak06cheat
҂🐋 • ridwan
҂🐋 • hafizh`, {jpegThumbnail:fakeimage}, [{buttonId:`BERI NILAI`,buttonText:{displayText:'BERI NILAI'},type:1},{buttonId:`TOKO PRODUK`,buttonText:{displayText:'TOKO PRODUK'},type:1}], {contextInfo: { mentionedJid: [creator,creator,creator,sender]}})
break
    }
            
            


        if (budy.includes(`bot`)) {
        	
let gwkee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `Ya saya bot ada yang bisa dibantu? `,

"buttons": [
						
{buttonId: '↪ HOME', buttonText: {displayText: '↪ HOME'}, type: 1}

],
					

headerType: 1
					

},
					
					
					}, {quoted: fkatalok})
 
client.relayWAMessage(gwkee)

					
					break
					}
					if (buttonsR === 'Ya') {
						fakeitem(`Terimaksih Telah Merespon`)
						break
						}
						if (buttonsR === 'Tidak') {
							fakeitem(`Terimaksih Telah Merespon`)
							break
							}
					if (buttonsR === 'Masalah Pendaftaran') {
						let gwee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `Apakah Kakak Mengalami Pendaftaran Ke Bot Gagal Terus? Pastikan Format Yang Kamu Gunakan Benar\n\n*FORMAT*: .daftar atau .regist atau .verify\n\nMemalsukan Data Diri Akan Di Kenai Sanksi`,
					
					
"footerText": "ㅤㅤㅤㅤ",

						
"footerText": `APAKAH PANDUAN INI MEMBANTU?`,

"buttons": [
						
{buttonId: 'Ya', buttonText: {displayText: 'Ya'}, type: 1},

{buttonId: 'Tidak', buttonText: {displayText: 'Tidak'}, type: 1}

],
					

headerType: 1
					

},
					

}, {quoted: fkatalok})
					
 
await client.relayWAMessage(gwee)
						break
						}
						

						if (buttonsR === 'Perintah Tidak Ditemukan') {
							let gwee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `Sepertinya Kamu Mengalami Masalah Pada Fitur Perintah, Sebaiknya Kakak Menggunakan Command/Perintah Yang Terdaftar Di Menu Bot Ya Karna Setiap Bot Memiliki Fitur Yang Berbeda Beda`,
					
					
"footerText": "ㅤㅤㅤㅤ",

"footerText": `APAKAH PANDUAN INI MEMBANTU?`,

"buttons": [
						
{buttonId: 'Ya', buttonText: {displayText: 'Ya'}, type: 1},

{buttonId: 'Tidak', buttonText: {displayText: 'Tidak'}, type: 1}
					

],
					

headerType: 1
					

},
					

}, {quoted: fkatalok})
					
 
await client.relayWAMessage(gwee)
							break
							}
							
if (buttonsR === '⋮☰ PANDUAN') {
let gwkee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `Hai Saya Mitsuha Akan Membantu Memecahkan Masalah Anda Silahkan Pilih Salah Satu Di Dibawah ⬇ `,

"buttons": [
						
{buttonId: 'Masalah Pendaftaran', buttonText: {displayText: 'Masalah Pendaftaran'}, type: 1},
{buttonId: 'Perintah Tidak Ditemukan', buttonText: {displayText: 'Perintah Tidak Ditemukan'}, type: 1},
{buttonId: 'Hubungi Pusat', buttonText: {displayText: 'Hubungi Pusat'}, type: 1}

],
					

headerType: 1
					

},
					
					
					}, {quoted: mek})
 
client.relayWAMessage(gwkee)

break
}
if (buttonsR === 'Hubungi Pusat') {
                    client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkatalok})
                    fakeitem(`punya masalah dengan bot? silahkan hubungi saya`)
                    break
                    }
           
if (buttonsR === '↪ HOME') {
getLevel3 = getLevelingLevel(sender)
mani = fs.readFileSync('./lib/luffy.jpeg')
num = `${sender.split("@")[0]}@s.whatsapp.net`
creator = "6285731261728@s.whatsapp.net"
hai = `Hai ${pushname} ${ucapanWaktu} saya mitsuha bot whatsapp akan membantu untuk membuat sticker dll`
gbutsanguy = [{buttonId:`IKLAN BOT`,buttonText:{displayText:'IKLAN BOT'},type:1},{buttonId:`LIST MENU`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`PLAY GAME`,buttonText:{displayText:'PLAY GAME'},type:1}]
mhan1 = await client.prepareMessage(from, mani, image)
gbuttonan = {
imageMessage: mhan1.message.imageMessage,
contentText: `${hai}`,
footerText: "Mitsuha",
buttons: gbutsanguy,
headerType: 4
}             
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./lib/Cp.jpeg'),
caption: `${hai}`,
"contextInfo": {
mentionedJid: [hai, num],
"externalAdReply": {
"title": `BOT BY MITSUHA`,
"body": `Time: ${time}`,
"mediaType": 2,
"previewType": `https://youtu.be/dQw4w9WgXcQ`,
"thumbnail": fs.readFileSync('./lib/Cp.jpeg'),
"mediaUrl": `https://youtu.be/dQw4w9WgXcQ`,
"sourceUrl": ""
}},
quoted: 
mek})
              break
                         }


if (buttonsR === 'IKLAN BOT') {
	if (!isRegistered) return fakeitem(ind.noregis())
	youuke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`OWNER`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`💷 *LIST HARGA SEWA BOT BY MITSUHA BOT WHATSAPP* 💷

IDR 5.000
No Premium
Premium Feature           No
Bonus Xp/Level              No
Expired                             14 Day
__________________________________
IDR 10.000
No Premium
Premium Feature           No
Bonus Xp/Level              No
Expired                             30 Day
__________________________________
IDR 15.000
Yes Premium
Premium Feature           Yes
Bonus Xp/Level              Yes
Expired                              -`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok, thumbnail: Buffer.alloc(0)})
              client.relayWAMessage(prep)
              break
              }
                  /*if (body.startsWith(`.${command}`)) {
                  opp = `*「 COMMAND IS NOT FOUND 」*`
                  client.sendMessage(from, opp, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: fkatalok2})  
                  break
                }*/
               /* if (body.startsWith(`X${command}`)) {
                  opp = `*「 COMMAND IS NOT FOUND 」*`
                  client.sendMessage(from, opp, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: fkatalok2})  
                  break
                }*/
                             if (budy.startsWith(`.${command}`)) {
                  	let gwee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `*COMMAND WAS NOT FOUND*`,
					
					
"description": `Donasinya Kak 😃??\nhttps://www.saweria.co/MitsuhaBot,`,

"footerText": "perintah tidak ditemukan ❌",

"buttons": [
						
{buttonId: '⋮☰ PANDUAN', buttonText: {displayText: '⋮☰ PANDUAN'}, type: 1}

],
					

headerType: 1
					

},
					

}, {quoted: fkatalok})
					
 
await client.relayWAMessage(gwee)

                  break
                  }
                  if (budy.startsWith(`#${command}`)) {
                  	let gwee = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `*COMMAND WAS NOT FOUND*`,
					
					
"description": `Donasinya Kak 😃😁\nhttps://www.saweria.co/MitsuhaBot,`,

"footerText": "perintah tidak ditemukan ❌",

"buttons": [
						
{buttonId: '⋮☰ PANDUAN', buttonText: {displayText: '⋮☰ PANDUAN'}, type: 1}

],
					

headerType: 1
					

},
					

}, {quoted: fkatalok})
					
 
await client.relayWAMessage(gwee)

                  break
                  }
               
                  if (budy.includes(`cok`)) {
                  	oh = fs.readFileSync(`./stiker/Dosa_1627026901784.webp`)
                  client.sendMessage(from, oh, sticker, {quoted: fkatalok})			
                  break
                  }
                                    if (budy.includes(`Test`)) {
                client.sendMessage(from, 'Aktif', text, {contextInfo: {externalAdReply:{title:'KULO MITSUHA MAS',body:`Time : ${time} - ${date}`,mediaType:2,thumbnail: fs.readFileSync('./lib/Cp.jpeg'),mediaUrl:`https://youtu.be/dQw4w9WgXcQ`,sourceUrl: ``}}})
                  break
                  }
                  if (budy.includes(`BOT`)) {
                client.sendMessage(from, 'Aktif', text, {contextInfo: {externalAdReply:{title:'KULO MITSUHA MAS',body:`Time : ${time} - ${date}`,mediaType:2,thumbnail: fs.readFileSync('./lib/Cp.jpeg'),mediaUrl:`https://youtu.be/dQw4w9WgXcQ`,sourceUrl: ``}}})
                  break
                  }
                  
                   if (budy.includes(`⌚`)) {
                   	if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
			  uptime = process.uptime()
					client.setStatus(`Runtime ${kyun(uptime)}`)
					reply(`Sukses mengganti bio`)
					break
					}
					if (budy.includes(`BUY`)) {
data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
client.relayWAMessage(prep)
              break
              }
                    if (budy.includes(`🦄`)) {
                    var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					const bot1 = ["ⒹⒺⓋ - ⒷⓄⓉ ⒷⓎ\n            ⓂⒾⓉⓈⓊⒽⒶ-ⒷⓄⓉⓏ","_MITSUHA-BOTZ_\n           _BY Chacha_"]
					const bot = bot1[Math.floor(Math.random() * bot1.length)]
					var options = {
					text: `${ucapanWaktu} Pacar Orang :v`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text, {quoted: faketag3})
					break
}

if (budy.includes(`${kunci}`)) {
fakeitem(`${respon}`)
break
}

if (buttonsR === 'Tutup') {
	  if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `© 𝑩?? - 𝑴??𝑻𝑺𝑼𝑯𝑨 𝑩𝑶𝑻𝒁`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
	var nomor = mek.participant
              const close = {
              text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
              contextInfo: { mentionedJid: [nomor] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, true);
              reply(close)
              break
              }
              if (buttonsR === 'Buka') {
              	  if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
open = {
              text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
              contextInfo: { mentionedJid: [sender] }
}
              client.groupSettingChange (from, GroupSettingChange.messageSend, false)
              client.sendMessage(from, open, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              break
              }
              if (buttonsR === 'Enable W1') {
              	  if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              	if (isWelkom) return fakeitem('「 SUDAH ON KAWAN 」')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
						break
						}
						if (buttonsR === 'Disable W0') {
							  if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
							var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
						break
						}
						if (buttonsR === 'Enable A1') {
							  if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
							if (isAntiLink) return fakeitem('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						fakeitem('「 SUKSES 」Fitur Anti Link Diaktifkan')
						break
						}
						
						if (buttonsR === 'Disable A0') {
							  if (!isRegistered) return fakeitem(ind.noregis())
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
							if (!isAntiLink) return fakeitem('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						fakeitem('「 SUKSES 」Fitur Anti Link Dimatikan')
						break 
						}
						if (buttonsR === 'Disable T0') {
							if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
							var ini = antitoxic.indexOf(from)
						antitoxic.splice(ini, 1)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						fakeitem('「 BERHASIL DI MATIKAN 」')
						break
						}
						if (buttonsR === 'Enable T1') {
							if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
							if (isAntiToxic) return fakeitem('「 SUDAH AKTIF 」')
						antitoxic.push(from)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('「 BERHASIL DI AKTIFKAN 」 ')
						break
						}
						if (buttonsR === 'Enable L1') {
							if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					if (isLevelingOn) return fakeitem('fitur level sudah aktif sebelum nya')
                    _leveling.push(from)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     fakeitem('「 BERHASIL DI AKTIFKAN 」')
                     break
                     }
                     
                     if (buttonsR === 'Disable L0') {
							if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					
					if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
					if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
					var ini = _leveling.indexOf(from)
						_leveling.splice(ini, 1)
                    fs.writeFileSync('./src/leveling.json', JSON.stringify(_leveling))
                     fakeitem('「 BERHASIL DI MATIKAN 」')
                     break
                     }
                     

              
              
  
     if (buttonsR === 'SPIN') {
     
              youke = fs.readFileSync('./lib/odc.jpeg')
            const p = hewan[Math.floor(Math.random() * hewan.length)]
              const p2 = hewan[Math.floor(Math.random() * hewan.length)]
              const p3 = hewan[Math.floor(Math.random() * hewan.length)]
		      buttons = [{buttonId:`SPIN`,buttonText:{displayText:'SPIN'},type:1},{buttonId:`GET`,buttonText:{displayText:'GET'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Tanggal ${date}\n©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`[  🎰 | SLOTS ]\n-----------------\n${p}\n${p2}<=====\n${p3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : 🦂<=====`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              client.relayWAMessage(prep)
              
              break
              }

if (buttonsR === 'GET') {
	getLevel2 = getLevelingLevel(sender)
	addLevelingLevel(sender, 2) 
	addLevelingXp(sender, 10)
	reply(`Usaha Yg Bagus Level Mu Naik Menjadi ${getLevel2} 🍷Dan Xp Mu Bertambah Menjadi ${getLevelingXp(sender)}🔥`)
	break
	}
	
	
				 

if (buttonsR === '10 menit') {
              if (!isRegistered) return fakeitem(ind.noregis())     
              if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `𖥻˖ֹMITSUHA BOTx || OFCʾ˖??`,"body": `Official Mitsuhabot Whatsapp`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
			  if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
			setTimeout( () => {
				client.groupSettingChange (from, GroupSettingChange.messageSend, true);
				}, 600000)
				setTimeout( () => {
				client.sendMessage(from, 'Perhatian Grup Akan Ditutup!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, `Grup akan ditutup dalam 10 menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
				if (buttonsR === '5 menit') {
              if (!isRegistered) return fakeitem(ind.noregis())     
              if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
			  if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
			setTimeout( () => {
				client.groupSettingChange (from, GroupSettingChange.messageSend, true);
				}, 300000)
				setTimeout( () => {
				client.sendMessage(from, 'Perhatian Grup Akan Ditutup!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, `Grup akan ditutup dalam 5 menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
				if (buttonsR === '5 menit >') {
              if (!isRegistered) return fakeitem(ind.noregis())     
              if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
			  if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
			setTimeout( () => {
				client.groupSettingChange (from, GroupSettingChange.messageSend, false)
				}, 300000)
				setTimeout( () => {
				client.sendMessage(from, 'Perhatian Grup Akan Dibuka!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, `Grup akan dibuka dalam 5 menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
				if (buttonsR === '10 menit >') {
              if (!isRegistered) return fakeitem(ind.noregis())     
              if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
              if (!isGroupAdmins) return client.sendMessage(from, `\`\`\`▢ FITUR ADMIN ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})     
			  if (!isBotGroupAdmins) return client.sendMessage(from, `\`\`\`▢ BOT HARUS ADMIN ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
			setTimeout( () => {
				client.groupSettingChange (from, GroupSettingChange.messageSend, false)
				}, 600000)
				setTimeout( () => {
				client.sendMessage(from, 'Perhatian Grup Akan Dibuka!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, `Grup akan dibuka dalam 10 menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
if (buttonsR === '10 Menit <') {
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
setTimeout( () => {
				client.groupLeave(from)
				}, 600000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 500000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 10 Menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
if (buttonsR === '14 Menit <') {
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
setTimeout( () => {
				client.groupLeave(from)
				}, 1,200,000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 1,100,000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 20 Menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}
if (buttonsR === '30 Menit <') {
if (!isRegistered) return fakeitem(ind.noregis())     
if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
setTimeout( () => {
				client.groupLeave(from)
				}, 1,800,000)
				setTimeout( () => {
				client.sendMessage(from, 'Waktu Habis Bot Akan Keluar!', text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
				}, 1,700,000)
				setTimeout( () => {
				client.sendMessage(from, `Bot Akan Keluar Dalam 30 Menit`, MessageType.text, { quoted: fkatalok })
				}, 0)
				break
}

				if (buttonsR === 'PLAY GAME') {
              youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`START`,buttonText:{displayText:'START'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/dg.png`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Menyambungkan Server...`, imageMessage: imageMsg,
              contentText:`*DUNGEON ISEKAI*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              
              break
              }
              if (buttonsR === 'START') {
              E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await client.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: fkatalok })
				
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SERANG ⚔`,buttonText:{displayText:'SERANG ⚔'},type:1},{buttonId:`LANTAI 2`,buttonText:{displayText:'LANTAI 2'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Skull.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Monster Tipe Pengguna Pedang Yang Ahli, Konon Pada Tahun 1567 Di Amerika Serikat Seorang Kesatria Berjuang Sendiri Melawan Penjajahan`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
              }        
             if (buttonsR === 'LANTAI 2') {
              E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
				await client.sendMessage(from, `Searching Monster...`, MessageType.text, { quoted: fkatalok })
				
			   youke = fs.readFileSync('./lib/odc.jpeg')
		      buttons = [{buttonId:`SERANG 🏹`,buttonText:{displayText:'SERANG 🏹'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Slime.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Slime Atau Sering Disebut Juga Lendir Memiliki Skill Hebat Ia Mampu Membelah Dirinya Menjadi Banyak Hingga Membuat Lawan Kuwalahan Menghadapinya`, imageMessage: imageMsg,
              contentText:`*RATE* ${E2}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
              }
              if (buttonsR === 'SERANG 🏹') {
              buttons = [{buttonId:`SWORD`,buttonText:{displayText:'SWORD'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Slime.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Slime Atau Sering Disebut Juga Lendir Memiliki Skill Hebat Ia Mampu Membelah Dirinya Menjadi Banyak Hingga Membuat Lawan Kuwalahan Menghadapinya`, imageMessage: imageMsg,
              contentText:`*BALAS SERANG LAWAN*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
              }
              if (buttonsR === 'SWORD') {
 gwetkgkue =  client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*WARNING*`,
"footerText": `Sepertinya Lawan Kamu Mulai Untuk Membelah Dirinya, Berhati Hati Lah!`,
"buttons": [
{buttonId: 'POTION', buttonText: {displayText: 'POTION'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwetkgkue)
              break
              }
              if (buttonsR === 'POTION') {
E1 = ['MENANG','KALAH','KALAH']
 E2 = E1[Math.floor(Math.random() * E1.length)]
gwetkkuyyyae =  client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*HASIL PERTARUNGAN*`,
"footerText": `Waktunya Kamu Mengetahui Hasil Pertarungan Kamu Dengan Slime`,
"buttons": [
{buttonId: `${E2}`, buttonText: {displayText: `${E2}`}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwetkkuyyyae)
break
}

if (buttonsR === 'SERANG ⚔') {
              buttons = [{buttonId:`DUAL SWORD`,buttonText:{displayText:'DUAL SWORD'},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/Skull.jpg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Monster Tipe Pengguna Pedang Yang Ahli, Konon Pada Tahun 1567 Di Amerika Serikat Seorang Kesatria Berjuang Sendiri Melawan Penjajahan`, imageMessage: imageMsg,
              contentText:`*BALAS SERANG LAWAN*`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              break
              }
 if (buttonsR === 'DUAL SWORD') {
addLevelingXp(sender, 10)
 gwetkgknue =  client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*WARNING*`,
"footerText": `Pengguna 2 Pedang Akan Sangat Menguntungkan Untuk Pertarungan Jarak Dekat`,
"buttons": [
{buttonId: 'HEAL', buttonText: {displayText: 'HEAL'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwetkgknue)
              break
              }
if (buttonsR === 'HEAL') {
 gggwetkgkue =  client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*MENYEMBUHKAN LUKA*`,
"footerText": `Tunggulah Beberapa Saat, Karna Lukamu Perlu Di Obati`,
"buttons": [
{buttonId: 'TEBAS', buttonText: {displayText: 'TEBAS'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gggwetkgkue)
              break
              }
  if (buttonsR === 'TEBAS') {
 E1 = ['MENANG','KALAH','KALAH']
 E2 = E1[Math.floor(Math.random() * E1.length)]
gwetkkuyyyae =  client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*HASIL PERTARUNGAN*`,
"footerText": `Waktunya Kamu Mengetahui Hasil Pertarungan Kamu Dengan Skeleton`,
"buttons": [
{buttonId: `${E2}`, buttonText: {displayText: `${E2}`}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(gwetkkuyyyae)
break
}


     if (buttonsR === 'KALAH') {        
     fakeitem(`Yah Kamu Kalah, Beristirahat Lah Untuk Pertarungan Seru Berikutnya\n\nLevel Mu Berkurang -5`)
     addLevelingLevel(sender, -5)
     break
    }
     if (buttonsR === 'MENANG') {
     	E1 = ['1','3','6','9']
         E2 = E1[Math.floor(Math.random() * E1.length)]
         E1 = ['1000','300','1500','100']
         E3 = E1[Math.floor(Math.random() * E1.length)]
              addLevelingLevel(sender, E2)
              addLevelingXp(sender, E3)
  fakeitem(`Kamu Mendapatkan Bonus Xp Sebanyak ${E3} Dan Level Kamu Naik ${E2} Level!`)
   break
   }
   
              if (buttonsR === '/START') {
              if (isRegistered) return  reply(`「 SUDAH DAFTAR SEBELUMNYA」`)
				const seriTod = createSerial(15)
				veri = sender
              _registered.push(sender)
				fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
				addRegisteredUser(sender, seriTod)
                getLevel3 = getLevelingLevel(sender)
                await reply(`Bot telah mengirimkan pesan pribadi ke whatsapp nomor kamu silahkan di cek ya`)
               var nomorr = mek.participant
                    pc = await client.prepareMessageFromContent(`${sender.split("@")[0]}@s.whatsapp.net`, {
"buttonsMessage": {
"contentText": `*Hallo ${pushname}*`,
"footerText": `Selamat data kamu sudah terdaftar di database bot, untuk mengakses bot silahkan untuk pencet tombol yanh sudah di sediakan bot dibawah jika tidak muncul tombol silahkan untuk ketik *.allmenu* karna button cmd tidak support whatsapp versi lama atau whatsapp mod\n\n©Mitsuhabot Whatsapp`,
"buttons": [
{buttonId: 'TOKO PRODUK', buttonText: {displayText: 'TOKO PRODUK'}, type: 1},
{buttonId: 'LIST MENU', buttonText: {displayText: 'LIST MENU'}, type: 1},
{buttonId: 'OWNER BOT', buttonText: {displayText: 'OWNER BOT'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok, contextInfo: {mentionedJid: [nomorr]}}) 
await client.relayWAMessage(pc)

      

                /*client.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, pc, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `©Mitsuhabot`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})*/
               break
              }
              
              
			  if (buttonsR === 'TOKO PRODUK') {
			        if (!isRegistered) return fakeitem(ind.noregis())   
		      data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
client.relayWAMessage(prep)
             break
             }
           if (buttonsR === '⫹⫺ cecan ⫹⫺') {
			  if (!isRegistered) return fakeitem(ind.noregis())
			    data = fs.readFileSync('./lib/apirandom.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
              /*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cecan))
		      buttons = [{buttonId:`⫹⫺ cecan ⫹⫺`,buttonText:{displayText:`⫹⫺ cecan ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'CEWEK CANTIK', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              }
              if (buttonsR === '⫹⫺ cogan ⫹⫺') {
			  if (!isRegistered) return fakeitem(ind.noregis())
			    data = fs.readFileSync('./lib/apirandom.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
              /*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.cogan))
		      buttons = [{buttonId:`⫹⫺ cogan ⫹⫺`,buttonText:{displayText:`⫹⫺ cogan ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'COWOK GANTENG', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
}
            
 
				if (buttonsR === '⫹⫺ waifu ⫹⫺') {
				if (!isRegistered) return fakeitem(ind.noregis())
              let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(b.url))
		      buttons = [{buttonId:`⫹⫺ waifu ⫹⫺`,buttonText:{displayText:`⫹⫺ waifu ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'©Mitsuhabot', imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
             
}
if (buttonsR === '👍') {
	
		     
like.push(sender)
fs.writeFileSync('./src/Star1.json', JSON.stringify(like))
reply(`Terimkasih Atas Ulasannya Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak Dan Baik`)
break
}
if (buttonsR === '👎') {
	
		      
		      
dislike.push(sender)
fs.writeFileSync('./src/Star2.json', JSON.stringify(dislike))
reply(`Terimkasih Atas Ulasannya Kami Harap Kamu Dapat Menikmati Bot Dengan Bijak Dan Baik`)
break
}
if (buttonsR === '⫹⫺ neko ⫹⫺') {
if (!isRegistered) return fakeitem(ind.noregis())
			  E1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
              E2 = E1[Math.floor(Math.random() * E1.length)]
			  client.sendMessage(from, `\`\`\`▢ SEDANG DI PROSES ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek}) 
			  B10 = (await fetchJson(`https://nekos.life/api/v2/img/neko`))
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(B10.url))
		      buttons = [{buttonId:`⫹⫺ neko ⫹⫺`,buttonText:{displayText:`⫹⫺ neko ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`©Mitsuhabot`, imageMessage: imageMsg,
              contentText:`Klick Tombol Dibawah Untuk Menampilkan Gambar Berikutnya`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok, thumbnail: Buffer.alloc(0)})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
			break
}
				if (buttonsR === 'TAMBAH 📦') {
if (!isRegistered) return fakeitem(ind.noregis()) 
if (!isQuotedImage) return fakeitem('reply foto produk lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas')
if(!q) return reply(`reply foto produk lalu ketik\n#tambah nama|nomor|deskripsi\n\ngunakan tanda | untuk pembatas`)
nmapro = q.split('|')[0]
nmorpro = q.split('|')[1]
biopro = q.split('|')[2]
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
H1 = {
nama : nmapro,
nomor : nmorpro,
deskripsi : biopro
}
produk.push(H1)
fs.writeFileSync(`./lib/${randKey.nomor}.jpeg`, delb)
fs.writeFileSync('./src/produk.js', JSON.stringify(produk))
client.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: fkatalok})		     	 
break
}
if (buttonsR === 'NEXT 📦') {
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/produk.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buttons = [{buttonId:`NEXT 📦`,buttonText:{displayText:'NEXT 📦'},type:1},{buttonId:`TAMBAH 📦`,buttonText:{displayText:'TAMBAH 📦'},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/${randKey.nomor}.jpeg`),'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`Ingin Produk Mu Di Pajang Juga? Yuk Ketik Tombol Tambah`, imageMessage: imageMsg,
contentText:`*NAMA PRODUK*: ${randKey.nama}\n\n*DESCRIPSI*: ${randKey.deskripsi}\n\n*PENJUAL*: ${randKey.nomor}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage}, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
client.relayWAMessage(prep)
              break
              }
              
              if (buttonsR === 'LEAVE NOW') {
              	    if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
                    }
                    if (buttonsR === 'LEAVE TIME') {
                    	    if (!isRegistered) return fakeitem(ind.noregis())     
                    if (!isGroup) return client.sendMessage(from, `\`\`\`▢ FITUR GROUP ONLY ▢\`\`\``, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `${ucapanWaktu}`,"body": `${time}`,"previewType": "PHOTO","thumbnailUrl": `https://b.top4top.io/p_2071ve6z50.jpg`,"thumbnail": "","sourceUrl": ""}},quoted: mek})
                    if (!isOwner) return fakeitem(`\`\`\`▢ FITUR KHUSUS OWNER BOT ▢\`\`\``)
				    gwetkhhkkke = await client.prepareMessageFromContent(from, {
					

"buttonsMessage": {
					

"contentText": `\`\`\`SILAHKAN PILIH SALAH SATU YA\`\`\``,
					
					
"footerText": `Pilih Satu Aja Ya Njg`,

"buttons": [
					
{buttonId: '10 Menit <', buttonText: {displayText: '10 Menit <'}, type: 1},

{buttonId: '20 Menit <', buttonText: {displayText: '20 Menit <'}, type: 1},
					
{buttonId: '30 Menit <', buttonText: {displayText: '30 Menit <'}, type: 1}

],
					

headerType: 1
					

},
					

}, {quoted:mek})
					
 
await client.relayWAMessage(gwetkhhkkke)

      break
      }
if (buttonsR === '⫹⫺ cerita_horor ⫹⫺') {
      if (!isRegistered) return fakeitem(ind.noregis())
			    data = fs.readFileSync('./lib/horor.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
              /*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
		      buttons = [{buttonId:`⫹⫺ cerita_horor ⫹⫺`,buttonText:{displayText:`⫹⫺ cerita_horor ⫹⫺`},type:1}]
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'CERITA - HOROR', imageMessage: imageMsg,
              contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Story*: ${randKey.result.story}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              }
if (buttonsR === 'BERI NILAI') {
if (!isRegistered) return fakeitem(ind.noregis())
youke = fs.readFileSync('./lib/odc.jpeg')
buttons = [{buttonId: `👍`,buttonText:{displayText: `👍`},type:1},{buttonId: `👎`,buttonText:{displayText: `👎`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./lib/odc.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:`KRITIK - ULASAN`, imageMessage: imageMsg,
contentText:`*TENTANG BOT INI*\nBeri Nilai Pada Kualitas Bot Ini\n#BERINILAI #RATINGBOT\n\n*TOTAL RATING*\n${date} - ${time}\nJumlah Suka ${like.length}\nJumlah Tidak Suka ${dislike.length}\n\n*KONTAK DEVELOPER*\nALAMAT\n_Yogyakarta - Godean - Guyangan_\nNUMBER PHONE\n_wa.me/6285731261728_\nABOUT ME\n_Lahir Pada 2007, Laki Laki_`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
break
}

if (buttonsR === 'SEARCHING') {
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/film.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
/*let b = (await fetchJson(`https://waifu.pics/api/sfw/waifu`))*/
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(randKey.result.thumbnail))
buttons = [{buttonId:`SEARCHING`,buttonText:{displayText:`SEARCHING`},type:1}]
imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'RANDOM - FILM', imageMessage: imageMsg,
contentText:`*Title*: ${randKey.result.title}\n\n*Desc*: ${randKey.result.desc}\n\n*Views*: ${randKey.result.views}\n\n*Duration*: ${randKey.result.duration}\n\n*Genre*: ${randKey.result.genre}\n\n*Tahun*: ${randKey.result.tahun}\n\n*Ratting*: ${randKey.result.rating}\n\n*Link*: ${randKey.result.link}\n\n*Actors*: ${randKey.result.actors}\n\n*Location*: ${randKey.result.location}\n\n*Release*: ${randKey.result.date_release}\n\n*Language*: ${randKey.result.language}\n\n*Link Download*: ${randKey.result.link_dl}`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkatalok})
client.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
}

if (buttonsR === 'NEXT 🕊') {
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/gc.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
let g = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*RANDOM GRUP WHATSAPP*\n\n*LINK 1*\n${randKey.result.title}\n\n*LINK 2*\n${randKey2.result.title}`,
"description": `.`,
"footerText": "Untuk Menampilkan Link Selanjutnya Pilih Tombol Di Bawah",
"buttons": [
{buttonId: 'NEXT 🕊', buttonText: {displayText: 'NEXT 🕊'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(g)
console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
break
}

if (buttonsR === 'SELANJUTNYA') {
if (!isRegistered) return fakeitem(ind.noregis())
data = fs.readFileSync('./lib/fdata.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
let o = await client.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `*KUMPULAN FAKE DATA ( PALSU )*\n\n*NAMA*: ${randKey.result.name}\n*BIRTHDAY*: ${randKey.result.birthday}\n*ADDRESS*: ${randKey.result.address}\n*CITY*: ${randKey.result.city}\n*REGION*: ${randKey.result.region}\n*COUNTRY*: ${randKey.result.country}\n*ZIP*: ${randKey.result.zip}\n*PHONE NUMBER*: ${randKey.result.phone_number}\n*USERNAME*: ${randKey.result.username}\n*PASSWORD*: ${randKey.result.password}\n*EMAIL*: ${randKey.result.email}`,
"description": `.`,
"footerText": "Ingat, Jangan Menyalah gunakan Data",
"buttons": [
{buttonId: 'SELANJUTNYA', buttonText: {displayText: 'SELANJUTNYA'}, type: 1}
],
headerType: 1
},
}, {quoted: fkatalok}) 
await client.relayWAMessage(o)
break
}


		if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
  }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 