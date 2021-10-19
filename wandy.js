const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    mentionedjid,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require("fs")
const util = require('util')
const Jimp = require('jimp')
const encodeUrl = require('encodeurl')
const Exif = require('./database/lib/exif');
const exif = new Exif();
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { EmojiAPI } = require('emoji-api')
const { exec } = require('child_process')
const crypto = require('crypto')
const cd = 4.32e+7

const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const afk = JSON.parse(fs.readFileSync('./database/lib/afk.js'))

const { fetchJson } = require('./database/lib/fetcher')
const { recognize } = require('./database/lib/ocr')
const { color, bgcolor } = require('./database/lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./database/lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:WandyGans\n'
            + 'ORG:Owner Ganteng;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281290565513: +6281290565513\n'
            + 'END:VCARD'
a = '```'
s = setting.s
versi = setting.v
nomorowner = setting.nomorowner
namaowner = setting.namaowner
prefix = setting.prefix
name = setting.name
limitt = setting.limitt
memberLimit = setting.membetLimit
ban = ["6285716167603@s.whatsapp.net"]
premium = ["6285211888322@s.whatsapp.net", "6281290565513@s.whatsapp.net"]
hitt = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

async function starts() {
	const dms = new WAConnection()
	dms.logger.level = 'warn'
	console.log(banner.string)
	dms.version = [2,2119, 6]
	dms.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
	})

	fs.existsSync('./session.json') && dms.loadAuthInfo('./session.json')
	dms.on('connecting', () => {
		start('2', 'Connecting...')
	})
	dms.on('open', () => {
		success('2', 'Connected')
	})
	await dms.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(dms.base64EncodedAuthInfo(), null, '\t'))

	/*dms.on('group-participants-update', async (anu) => {
		try {
			const mdata = await dms.groupMetadata(anu.jid)
			console.log(anu)


if (anu.action == 'add') {
       num = anu.participants[0]
       try {
					ppimg = await dms.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
	        
               welcums = fs.readdirSync('./image/welcome/') 
                var angkas = Math.floor(Math.random() * 1) + 1
                var font = await Jimp.loadFont('./font/Baloo-Regular.ttf.fnt')
                var fonts = await Jimp.loadFont('./font/Montserrat-Medium64.fnt') 
                var dlppuser = await getBuffer(ppimg) 
                fs.writeFileSync(`./image/ppuser${angkas}.jpg`, dlppuser)
                  var image = await Jimp.read(`./image/welcome/${angkas}.png`)
                var ppuser = await Jimp.read(`./image/ppuser${angkas}.jpg`)  
               ppuser.resize(800, 800)
               ppuser.circle()
                image.blit(ppuser, 900.00, 305.00 )
                
                
                image.print(font, 233.00, 555.00, {text: pushname2}, 1044, 750)
                
 await image.writeAsync('./image/welcome.png');
             var ini_img = fs.readFileSync('./image/welcome.png')  
                var welkam = `Welcome to ${mdata.subject}, please intro!`
                
                fs.unlinkSync('./image/welcome.png')
                fs.unlinkSync(`./image/ppuser${angkas}.jpg`)

                
                await dms.sendMessage(mdata.id, ini_img, MessageType.image, { caption: welkam })
            
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await dms.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonaraaa @${num.split('@')[0]} Jangan Balek Lagi Ngab:v`
				let buff = await getBuffer(ppimg)
				dms.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})
	*/


	        dms.on('chat-update', async (mek) => {
		    try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const BotWea2 = ["081290565513@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = dms.contacts[nameReq] != undefined? dms.contacts[nameReq].vname || dms.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
             buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
			hitt.push(command)
			const arg = budy.slice(command.length + 2, budy.length)
			const zanStick = (from, filename, mek) => {
	        dms.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
            }
            buttonsR = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : '' || ''
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const wan = (pesan, tipe, target, target2) => {
	        dms.sendMessage(from, pesan, tipe, { 'contextInfo': {mentionedJid: [sender], 'forwardingScore': 999,'isForwarded': true}, quoted: { 'key': { 'participant': `${target}`, 'remoteJid': '393470602054-1351628616@g.us', 'fromMe': false, 'id': 'B391837A58338BA8186C47E51FFDFD4A' }, 'message': { 'documentMessage': { 'jpegThumbnail': fs.readFileSync('./img/logo.jpg'), 'mimetype': 'application/octet-stream', 'title': `${target2}`, 'fileLength': '36', 'pageCount': 0, 'fileName': `${target2}` }}, 'messageTimestamp': '1614069378', 'status': 'PENDING'}})
		    }
            const tescuk = ['0@s.whatsapp.net']
			const isCmd = body.startsWith(prefix)
if (!setting.autoread) {
dms.chatRead(from)
}
			
                mess = {
				wait: `${a}[❗] Wait...${a}`,
				teks: `${a}[❗]Teks Nya mana?\nContoh ${command} tes${a}`,
				done: `${a}「❗」Done :D${a}`,
				success: '',
				error: {
					stick: `「❗」${a}MAAF FITUR STICKER SEDANG DALAM PERBAIKAN${a}`,
					Iv: `「❗」${a}MAAF LINK TIDAK VALID${a}`
				},
				only: {
			    lol: `${a}「❗」MAAF FITUR INI AKAN TERSEDIA${a}`,
				group: `${a}「❗」MAAF FITUR INI HANYA DAPAT DI GUNAKAN DALAM GROUP${a}`,
				benned: `${a}「❗」MAAF NOMOR ANDA DI BANNED HUBUNGI OWNER UNTUK UNBAN!${a}`,
				ownerG: `${a}「❗」MAAF COMMAND INI KHUSUS OWNER GC!${a}`,
				publicG: `${a}「❗」FITUR INI DI LOCK OWNER!${a}`,
				ownerB: `${a}「❗」MAAF FITUR INI KHUSUS OWNER${a}`,
				bokep: `「❗」${a}Harus mengatifkan mode sange${a}\n${a}Cara mengaktifkan ketik ${prefix}sange on${a}`,
				userB: `${a}「❗」BELUM TERDAFTAR\nKetik ${prefix}verify${a}`,
                prem: `${a}「❗」MAAF FITUR INI KHUSUS PREMIUM${a}`,
				admin: `${a}「❗」Maaf Command Ini Khusus Admin Group ${a}`,
				Badmin: `${a}「❗」MAAF SAYA BELUM JADI ADMIN${a}`
				}
			}

			const botNumber = dms.user.jid
			const ownerNumber = ["6281290565513@s.whatsapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await dms.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await dms.chats.all()
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dms.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				dms.sendMessage(hehe, teks, text)
			}
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
               }
              const sendFileFromUrl = async(link, type, options) => {
              hasil = await getBuffer(link)
              pemuda.sendMessage(from, hasil, type, options).catch(e => {
              fetch(link).then((hasil) => {
              dms.sendMessage(from, hasil, type, options).catch(e => {
              dms.sendMessage(from, { url : link }, type, options).catch(e => {
              reply
              console.log(e)
              })
              })
              })
              })
              }
			const costum = (pesan, tipe, target, target2) => {
			dms.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dms.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dms.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
           }

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanjam = '*Selamat Malam*'
                                        }
if(time2 < "22:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }       
if(time2 < "21:00:00"){
var ucapanjam = '*Selamat Malam* '
                                         }    
if(time2 < "20:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }                                           
if(time2 < "19:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }
if(time2 < "18:00:00"){
var ucapanjam = '*Selamat Sore*'
                                         }
if(time2 < "17:00:00"){
var ucapanjam = '*Selamat Sore*'
                                         }                                         
if(time2 < "16:00:00"){
var ucapanjam = '*Selamat Sore*'
                                         }
if(time2 < "15:00:00"){
var ucapanjam = '*Selamat Sore*'
                                         }                     
if(time2 < "14:00:00"){
var ucapanjam = '*Selamat Siang*'
}
if(time2 < "13:00:00"){
var ucapanjam = '*Selamat Siang*'
                                         }
if(time2 < "12:00:00"){
var ucapanjam = '*Selamat Siang*'
                                         }     
if(time2 < "11:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }   
if(time2 < "10:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }     
if(time2 < "09:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }         
if(time2 < "08:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }   
if(time2 < "07:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }          
if(time2 < "06:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }    
if(time2 < "05:00:00"){
var ucapanjam = '*Selamat Pagi*'
                                         }   
if(time2 < "04:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }    
 if(time2 < "03:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }   
if(time2 < "01:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         } 
if(time2 < "00:00:00"){
var ucapanjam = '*Selamat Malam*'
                                         }
kode1 = [`1.`,`2.`,`3.`,`4.`,`5.`,`6.`,`7.`,`8.`,`9.`,`0.`]
kode2 = [`1.`,`2.`,`3.`,`4.`,`5.`,`6.`,`7.`,`8.`,`9.`,`0.`]
kode3 = [`1.`,`2.`,`3.`,`4.`,`5.`,`6.`,`7.`,`8.`,`9.`,`0.`]
kode4 = [`1.`,`2.`,`3.`,`4.`,`5.`,`6.`,`7.`,`8.`,`9.`,`0.`]
kode5 = [`1.`,`2.`,`3.`,`4.`,`5.`,`6.`,`7.`,`8.`,`9.`,`0.`]
kode6 = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`]
const server6 = kode6[Math.floor(Math.random() * kode6.length)]
const server1 = kode1[Math.floor(Math.random() * kode1.length)]
const server2 = kode2[Math.floor(Math.random() * kode2.length)]
const server3 = kode3[Math.floor(Math.random() * kode3.length)]
const server4 = kode4[Math.floor(Math.random() * kode4.length)]
const server5 = kode5[Math.floor(Math.random() * kode5.length)]

if (afk.hasOwnProperty(sender.split('@')[0])) {
reply(`${a}Anda Berhenti afk${a}`)
delete afk[sender.split('@')[0]]
fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
}

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mSucces\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mSucces\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

switch(command) {
//case
case prefix+'help':                                
case prefix+'menu':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                uptime = process.uptime()
				user.push(sender)
				myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay} ${day}-${myMonths[bulan]}-${year}`    
                const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, cpu_device, device_battery, device_ram } = dms.user.phone
                const server = createSerial(15)
                myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
                myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggale = `${thisDay} ${day}-${myMonths[bulan]}-${year}`    
                var status = 'FREE⚔️'
                if (isOwner) {
                status  = 'OWNER⚔️⚔️'
                }
lonte = `
╭─❒ *UserInfo* ❒
│❒ ${a}Name : ${pushname2}${a}
│❒ ${a}Number : ${sender.split('@')[0]}${a}
│❒ ${a}Status : ${status}${a}
╰─
╭─❒ *Infobot* ❒
│❒ ${a}Name bot : ${name}${a}
│❒ ${a}User : ${user.length} User ${a}
│❒ ${a}Owner : ${nomorowner}${a}
│❒ ${a}Name Owner : ${namaowner}${a}
│❒ ${a}Runtime : ${kyun(uptime)}${a}
│❒ ${a}Server : ${server1}${server2}${server3}${server4}${server5}${server6}${a}
│❒ ${a}Total cmd : ${hitt.length}${a}
╰─
╭─❒ *Ownermenu* ❒
│❒ ${a}${prefix}setnamebot [nama]${a}
│❒ ${a}${prefix}setbiobot [bio]${a}
│❒ ${a}${prefix}setppbot [image]${a}
│❒ ${a}${prefix}setprefixbot [prefix]${a}
│❒ ${a}${prefix}clearall${a}
│❒ ${a}${prefix}broadcast [teks]${a}
│❒ ${a}${prefix}ban/unban [tag]${a}
│❒ ${a}${prefix}leave${a}
╰─
╭─❒ *Mainmenu* ❒
│❒ ${a}${prefix}afk [alasan]${a}
│❒ ${a}${prefix}request [fitur]${a}
│❒ ${a}${prefix}report [error]${a}
│❒ ${a}${prefix}readmore [teks/teks2]${a}
│❒ ${a}${prefix}profile${a}
│❒ ${a}${prefix}join [linkgc]${a}
│❒ ${a}${prefix}owner${a}
│❒ ${a}${prefix}leave${a}
│❒ ${a}${prefix}chat Tes/628*****${a}
╰─
╭─❒ *Ownermenu* ❒
│❒ ${a}${prefix}setnamebot [nama]${a}
│❒ ${a}${prefix}setbiobot [bio]${a}
│❒ ${a}${prefix}setppbot [image]${a}
│❒ ${a}${prefix}setprefixbot [prefix]${a}
│❒ ${a}${prefix}clearall${a}
│❒ ${a}${prefix}broadcast [teks]${a}
│❒ ${a}${prefix}ban/unban [tag]${a}
│❒ ${a}${prefix}leave${a}
╰─
╭─❒ *Groupmenu* ❒
│❒ ${a}${prefix}delete${a}
│❒ ${a}${prefix}promote${a}
│❒ ${a}${prefix}demote${a}
│❒ ${a}${prefix}buka-tutup${a}
│❒ ${a}${prefix}setnamegrup${a}
│❒ ${a}${prefix}setdesc${a}
│❒ ${a}${prefix}setppgrup${a}
│❒ ${a}${prefix}hidetag${a}
│❒ ${a}${prefix}tagall${a}
│❒ ${a}${prefix}add${a}
│❒ ${a}${prefix}listadmin${a}
│❒ ${a}${prefix}infogc${a}
│❒ ${a}${prefix}ownergrup${a}
│❒ ${a}${prefix}linkgrup${a}
╰─
╭─❒ *Makermenu* ❒
│❒ ${a}${prefix}sticker${a}
│❒ ${a}${prefix}toimg${a}
│❒ ${a}${prefix}naruto${a}
│❒ ${a}${prefix}flaming${a}
│❒ ${a}${prefix}underwater${a}
│❒ ${a}${prefix}devil${a}
│❒ ${a}${prefix}bear${a}
│❒ ${a}${prefix}crisp${a}
│❒ ${a}${prefix}glitch${a}
│❒ ${a}${prefix}csgo1${a}
│❒ ${a}${prefix}csgo2${a}
│❒ ${a}${prefix}csgo3${a}
│❒ ${a}${prefix}csgo4${a}
│❒ ${a}${prefix}csgo5${a}
│❒ ${a}${prefix}cup${a}
│❒ ${a}${prefix}glue${a}
│❒ ${a}${prefix}love${a}
│❒ ${a}${prefix}matrix${a}
│❒ ${a}${prefix}futuris${a}
│❒ ${a}${prefix}kasarpop${a}
│❒ ${a}${prefix}wolf${a}
│❒ ${a}${prefix}emojitopng${a}
│❒ ${a}${prefix}vintage${a}
│❒ ${a}${prefix}luxury${a}
│❒ ${a}${prefix}rainbow${a}
│❒ ${a}${prefix}stars${a}
│❒ ${a}${prefix}xmas${a}
│❒ ${a}${prefix}fur${a}
│❒ ${a}${prefix}sky${a}
│❒ ${a}${prefix}under1${a}
│❒ ${a}${prefix}under2${a}
│❒ ${a}${prefix}under3${a}
│❒ ${a}${prefix}under4${a}
│❒ ${a}${prefix}under5${a}
│❒ ${a}${prefix}scary${a}
│❒ ${a}${prefix}ff${a}
│❒ ${a}${prefix}tahta${a}
│❒ ${a}${prefix}cake${a}
│❒ ${a}${prefix}winter${a}
│❒ ${a}${prefix}hellowen${a}
│❒ ${a}${prefix}joker${a}
│❒ ${a}${prefix}skeleton${a}
│❒ ${a}${prefix}coffe${a}
│❒ ${a}${prefix}coffe2${a}
│❒ ${a}${prefix}grafity${a}
│❒ ${a}${prefix}pokemon${a}
│❒ ${a}${prefix}coffe${a}
│❒ ${a}${prefix}pubg${a}
│❒ ${a}${prefix}porn${a}
│❒ ${a}${prefix}art${a}
│❒ ${a}${prefix}blackpink${a}
│❒ ${a}${prefix}barcode${a}
│❒ ${a}${prefix}ttp${a}
│❒ ${a}${prefix}qrmaker${a}
│❒ ${a}${prefix}nulis${a}
│❒ ${a}${prefix}nulis2${a}
│❒ ${a}${prefix}nulis3${a}
│❒ ${a}${prefix}smoke${a}
│❒ ${a}${prefix}holograpic${a}
│❒ ${a}${prefix}metal${a}
│❒ ${a}${prefix}toxic${a}
│❒ ${a}${prefix}minion${a}
│❒ ${a}${prefix}beach1${a}
│❒ ${a}${prefix}beach2${a}
│❒ ${a}${prefix}beach3${a}
│❒ ${a}${prefix}beach4${a}
│❒ ${a}${prefix}natal${a}
│❒ ${a}${prefix}ttp2${a}
│❒ ${a}${prefix}attp${a}
╰─
╭─❒ *MediaDownloader* ❒
│❒ ${a}${prefix}ssweb [url]${a}
│❒ ${a}${prefix}playmp3 [judul]${a}
│❒ ${a}${prefix}pinterest [nama]${a}
│❒ ${a}${prefix}quotes${a}
│❒ ${a}${prefix}ppclop${a}
│❒ ${a}${prefix}wikipedia [anjing]${a}
│❒ ${a}${prefix}wikipedia2 [anjing]${a}
│❒ ${a}${prefix}artinama [wandy]${a}
│❒ ${a}${prefix}artimimpi [kejebur]${a}
│❒ ${a}${prefix}tts id [teks]${a}
│❒ ${a}${prefix}nomorhoki [nomor telpon]${a}
│❒ ${a}${prefix}kbbi [anjing]${a}
│❒ ${a}${prefix}nicff${a}
│❒ ${a}${prefix}brainly [1+1]${a}
│❒ ${a}${prefix}shoppe [ product ]${a}
│❒ ${a}${prefix}cerpen${a}
│❒ ${a}${prefix}trendtwit${a}
│❒ ${a}${prefix}tinyurl [url]${a}
│❒ ${a}${prefix}detikvideo [video]${a}
│❒ ${a}${prefix}lirik [nama lagu]${a}
╰─`
await wan(lonte, MessageType.text, tescuk, `${ucapanjam} ${pushname2}\nTanggal : ${tanggal}\nJam : ${jam}`)
break
case prefix+'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					teks = `Nama Bot berhasil di ubah menjadi : ${name}`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'setbiobot':
				    if (!isOwner) return reply(mess.only.ownerB)
				    if (args.length < 1) return reply('Error! Masukan teksnya')
					iyek = args.join(' ')
					dms.setStatus(`${iyek}`)
					teks = `Sukses menganti bio ke : ${iyek}`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    dms.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dms.downloadAndSaveMediaMessage(enmedia)
					await dms.updateProfilePicture(botNumber, media)
					teks = `Berhasil mengganti profile bot!`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'setprefixbot':
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
				    teks = `Prefix berhasil di ubah menjadi : ${prefix}`
				    await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'clearall':
					if (!isOwner) return reply('Lu Gak Gans')
					anu = await dms.chats.all()
					dms.setMaxListeners(25)
					for (let _ of anu) {
						dms.deleteChat(_.jid)
					}
					teks = `*_Sukses delete all chat ${name}_*`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'broadcast':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await dms.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					bc = await dms.downloadMediaMessage(encmedia)
					for (let _ of anu) {
				    dms.sendMessage(_.jid, bc, image, {caption: `[ Izin Broadcast ]\n\n${body.slice(4)}`})
					}
					reply('Suksess broadcast')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *BROADCAST* ]\n\n${body.slice(4)}`)
					}
					reply('Suksess broadcast')
					}
					break
case prefix+'ban':
					dms.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					teks = `berhasil banned : ${ban}`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					teks = `Nomor wa.me/${bnnd} telah di unban!`
					await wan(teks, MessageType.text, tescuk, ` *Sukses* `)
					break
case prefix+'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await dms.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
			        teks = `Selamat tinggal all member ${groupMetadata.subject}`
			        await wan(teks, MessageType.text, tescuk, ` *Byee* `)
	                break
case prefix+'afk':
                   if (isBanned) return reply(mess.only.benned)    
		           if (!isUser) return reply(mess.only.userB)
	               if (!q) return reply(`Kakak Afk karna apa?`)
                   alasan = args.join(" ")
                   afk[sender.split('@')[0]] = alasan.toLowerCase()
                   fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                   ini_txt = "Anda telah afk. "
                   if (alasan != "") {
                   ini_txt += "Dengan alasan " + alasan
                   }
                   reply(ini_txt)
                   break
case prefix+'request':
                   if (isBanned) return reply(mess.only.benned)    
                   if (!isUser) return reply(mess.only.userB)
                   if (!q) return reply(`Masukan jenis fitur yg akan di request!`)
                   const cfrr = args.join(' ')
                   if (cfrr.length > 300) return dms.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                   var nomor = mek.participant
                   const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                   var options = {
                   text: ress,
                   contextInfo: {mentionedJid: [nomor]},
                   }
                   dms.sendMessage('6281290565513@s.whatsapp.net', options, text, {quoted: mek})
                   reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                   break
case prefix+'report':
                   if (isBanned) return reply(mess.only.benned)    
                   if (!isUser) return reply(mess.only.userB)
                   const pesan = body.slice(8)
                   if (pesan.length > 300) return dms.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                   var nomor = mek.participant
                   const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                   var options = {
                   text: teks1,
                   contextInfo: {mentionedJid: [nomor]},
                    }
                   dms.sendMessage('6281368646011@s.whatsapp.net', options, text, {quoted: mek})
                   reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                   break
case prefix+'readmore':
				   if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   if (!q) return reply(`Contoh ${prefix}readmore aku/kamu`)
				   var kls = args.join(' ')
				   var has = kls.split("/")[0];
				   var kas = kls.split("/")[1];
				   dms.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
				   break
case prefix+'profile':
				   if (!isUser) return reply(mess.only.userB)
				   if (isBanned) return reply(mess.only.benned)
    		   	try {
				   profil = await dms.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				   } catch {
				   profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				   } 
				   buff = await getBuffer(profil)
				   profile = `
╭─❒ *Profile* ❒
│❒ ${a}Name : ${pushname2}${a}
│❒ ${a}Number : ${sender.split('@')[0]}${a}
│❒ ${a}Role : ${role}${a}
╰─`
				   dms.sendMessage(from, buff, image, {quoted: mek, caption: profile})
				   break
case prefix+'daftar':
case prefix+'verify':
					dms.updatePresence(from, Presence.composing)
					if (isUser) return reply('Numbers Kamu Sudah Ada Di Bot')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					const serial= createSerial(10)
					try {
					ppimg = await dms.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `
╭─❒ *Pendaftaran* ❒
│❒ *Nama* : ${pushname2}
│❒ *Tanggal* : ${date}
│❒ *Waktu* : ${time}
│❒ *Seri* : ${serial}
│❒ *Note* : Untuk menggunakan bot ketik #menu
╰─`
					daftarimg = await getBuffer(ppimg)
					dms.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break 
case prefix+'join': 
                  if (!q) return reply('Linknya?')
                  if (!isUser) return reply(mess.only.userB)
                  if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
                  link = args[0].replace('https://chat.whatsapp.com/','')
                  fak = dms.query({ json: ['action', 'invite', link],
                  expect200: true })
                  reply('Berhasil Masuk Grup')
                  break
case prefix+'owner':
                  if (isBanned) return reply(mess.only.benned)    
			      if (!isUser) return reply(mess.only.userB)
                  dms.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  reply(`Sv Nomor Owner aku yak :D`)
                  break
case prefix+'chat':
                  if (isBanned) return reply(mess.only.benned)    
                  if (!isUser) return reply(mess.only.userB)
                  if (!q) return reply(`masukan teks masalah!`)
                  tahtar3 = args.join(' ')
                  tahtar = tahtar3.split("/")[0];
			      nomer = tahtar3.split("/")[1];
                  var nomor = mek.participant
                  const teks = `*[CHAT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${tahtar}`
                  
                  var options = {
                  text: teks,
                  contextInfo: {mentionedJid: [nomor]},
                  }
                  dms.sendMessage(`${nomer}@s.whatsapp.net`, options, text, {quoted: mek})
                  reply('Terkirim!')
                  break
case prefix+'ssweb':
                  if (!isUser) return reply(mess.only.userB)
                  if (isBanned) return reply(mess.only.benned)
                  if (args.length < 1) return reply(`${a}Contoh : ${prefix}ssweb www.youtube.com${a}`)
                  reply(mess.wait)
                  teks = args.join(' ')
                  buff = await getBuffer(`http://hadi-api.herokuapp.com/api/ssweb?url=${teks}&device=phone&full=off`, {method: 'get'})
                  dms.sendMessage(from, buff, image, {quoted: mek,caption: teks})
                  break
case prefix+'playmp3':
case prefix+'play':
                  if (isBanned) return reply(mess.only.benned)    
				  if (!isUser) return reply(mess.only.userB)
			      if (!q) return reply(`「❗」 _Maaf anda belum memasukan judul lagu_ `)
                  reply(mess.wait)
                  play = args.join(' ')
                  anu = await fetchJson(`http://75.119.137.248:21587/play?q=${play}`, {method: 'get'})
                   infomp3 = `
*Judul* : ${anu.result.title}
*Ukuran* : ${anu.result.filesizeF}
*Server* : ${anu.result.server}
*Link* : ${anu.result.dl_link}`
                  buff = await getBuffer(anu.result.thumb)
                  musik = await getBuffer(anu.result.dl_link)
                  dms.sendMessage(from, buff, image, {quoted: mek, caption: infomp3})
                  dms.sendMessage(from, musik, audio, { mimetype: 'audio/mp4', quoted: mek})
                  break
case prefix+'ytsearch':
                  if (isBanned) return reply(mess.only.benned)    
				  if (!isUser) return reply(mess.only.userB)
                  if (!args.length) return reply('Judulnya apa kak?')
                  try {
              	reply(mess.wait)
                  const input = args.join(" ")
                  const filter1 = await ytsd.getFilters(input)
                  const filters1 = filter1.get('Type').get('Video')
                  const { items } = await ytsd(filters1.url, { limit: 10 })
                  let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                  for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                  thumb = await getBuffer(items[0].bestThumbnail.url)
                  await dms.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
                  } catch(e) {
                  reply(`Error: ${e.message}`)
                  }
                  break
case prefix+'pinterest':
                  if (isBanned) return reply(mess.only.benned)    
                  if (!isUser) return reply(mess.only.userB)
                  if (!q) return reply(mess.teks)
                  reply(mess.wait)
                  teks = args.join(' ')
                  data = await getBuffer(`https://leyscoders-api.herokuapp.com/api/pinsearch?q=${teks}&apikey=${apil}`, {method: 'get'})
                  dms.sendMessage(from, data, image, { quoted: mek})
                  break
case prefix+'quotes':
                  if (!isUser) return reply(mess.only.userB)
                  if (isBanned) return reply(mess.only.benned)
                  buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/quotes-image`, {method: 'get'})
                  dms.sendMessage(from, buff, image, {quoted: mek})
                  break 
case prefix+'ppclouple':
                  if (!isUser) return reply(mess.only.userB)
                  if (isBanned) return reply(mess.only.benned)
                  reply(mess.wait)
                  buff = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${apil}`, {method: 'get'})
                  Cowok = `Cowok`
                  Cewek = `Cewek`
                  pp1 = await getBuffer(buff.result.male)
                  pp2 = await getBuffer(buff.result.female)
                  dms.sendMessage(from, pp1, image, {quoted: mek, caption: Cowok})
                  dms.sendMessage(from, pp2, image, {quoted: mek, caption: Cewek})
                  break
case prefix+'wikipedia':
case prefix+'wiki':
				 if (isBanned) return reply(mess.only.benned)
			     if (!isUser) return reply(mess.only.userB)
			     if (!q) return reply(`Masukan yang mau di cari`)
			     tek = args.join(' ')
                 data = await fetchJson(`https://bsbt-api-rest.herokuapp.com/api/wikipedia?query=${tek}&apikey=${apib}`)
                 teks = `「 *WIKI PEDIA* 」\n*Pencarian* : ${tek}\n━━━━━━━━━━━━━━━━━━━━━\n*Hasil* : ${data.result}`
                 reply(teks)
                 break
case prefix+'wikipedia2':
                if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
                teks = args.join(' ')
                res = await wikiSearch(teks).catch(e => {
                return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
                }) 
                result = `*Judul :* ${res[0].judul}
                *Wiki :* ${res[0].wiki}`
                sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
                reply(result)
                })
                break
case prefix+'artinama':
				if (isBanned) return reply(mess.only.benned)
			    if (!isUser) return reply(mess.only.userB)
			    if (!q) return reply(`Masukan nama`)
			    name = args.join(' ')
                dete = await fetchJson(`https://bsbt-api-rest.herokuapp.com/api/artinama/?nama=${name}&apikey=${apib}`)
                teks = `「 *ARTINAMA* 」\n${dete.arti}`
                reply(teks)
                break
case prefix+'artimimpi':
				if (isBanned) return reply(mess.only.benned)
			    if (!isUser) return reply(mess.only.userB)
			    if (!q) return reply(`Masukan nama`)
			    name = args.join(' ')
                dete = await fetchJson(`http://75.119.137.248:21587/artimimpi?mimpi=${name}`)
                teks = `「 *ARTIMIMPI* 」\n${dete.result}`
                reply(teks)
                break
case prefix+'tts':
				if (args.length < 1) return reply(`Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`)
			    const gtts = require('./database/lib/gtts')(args[0])
				if (args.length < 2) return denz.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				var bby = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				bby.length > 300
				? reply('Teks nya terlalu panjang kak')
				: gtts.save(ranm, bby, function () {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply(dla.stikga())
				dms.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
				fs.unlinkSync(rano)
				})
				})
				break
case prefix+'nomorhoki':
				if (isBanned) return reply(mess.only.benned)
			    if (!isUser) return reply(mess.only.userB)
			    if (!q) return reply(`Masukan nomor telfon\nContoh ${command} 6281290565513`)
			    nomer = args.join(' ')
                data = await fetchJson(`https://api.chipa.xyz/api/primbon_no_hoki?nomer=${nomer}&apikey=TP9MYI37I0UAUONJC9JQ6TXS`)
                teks = ` *Nomor* : ${nomer}\n*Info* : ${data.result.info}\n*Positif* : ${data.result.positif}\n*Negatif* : ${data.result.negatif}`
                reply(teks)
                break
case prefix+'kbbi':  
                if (args.length < 1) return reply('MASUKKAN QUERY')
                anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                reply(anu1)
                break
case prefix+'nicff':
				if (isBanned) return reply(mess.only.benned)
			    if (!isUser) return reply(mess.only.userB)
                dete = await fetchJson(`https://bsbt-api-rest.herokuapp.com/api/nickepep?apikey=${apib}`)
                teks = `「 *NICFF* 」\n${dete.result.result}`
                reply(teks)
                break
case prefix+'brainly':
				if (isBanned) return reply(mess.only.benned)
			    if (!isUser) return reply(mess.only.userB)
			    if (!q) return reply(`Masukan yang mau di cari`)
			    tek = args.join(' ')
                data = await fetchJson(`https://bsbt-api-rest.herokuapp.com/api/brainly?query=${tek}&apikey=${apib}`)
                teks = `「 *BRAINLY* 」\n*Pencarian* : ${tek}\n━━━━━━━━━━━━━━━━━━━━━\n*Hasil* : ${data.jawaban}`
                reply(teks)
                break
case prefix+'carigrup':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(`Masukan nama group`)
                hx = require('hx-api')
                hx.linkwa(`${q}`).then(res => {
                f = ``
                for (let i of res) {
                f += `group whatsapp
                name: ${i.nama}
                link: ${i.link}\n\n`
                }
                veler = f.trim()
                reply(veler)
                })
                break
case prefix+'shoppe':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                reply(mess.wait)
                shop = await fetchJson(`https://x-restapi.herokuapp.com/api/shopee-search?q=${product}&apikey=BETA`, {method: 'get'})
                buff = await getBuffer(shop.image)
                capt = `
「 *SHOOPE* 」
*Nama product* : ${shop.name}
*Mata uang* : ${shop.currency}
*Stok* : ${shop.stock}
*Pembeli* : ${shop.historical_sold}
*Like* : ${shop.liked_count}
*View* : ${shop.view_count}
*Item status* : ${shop.item_status}
*Price* : ${shop.price}
*Rate* : ${shop.item_rating}
*Lokasi* : ${shop.shop_location}`
                dms.sendMessage(from, buff, image, {quoted: mek,caption: capt})
                break
case prefix+'cerpen':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                reply(anu1)
                break
case prefix+'playstore':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(`Masukan nama game`)
                hx = require('hx-api')
                hx.playstore(`${q}`).then(res => {
                f = ``
                for (let i of res) {
                f += `*[PlayStore]*
                Nama : ${i.name}
                Developer : ${i.developer}
                Developer Link : ${i.link_dev}
                Link : ${i.link}\n━━━━━━━━━━━━━━━━━━\n\n`
                }
                veler = f.trim()
                reply(veler)
                })
                break
case prefix+'gimage':
case prefix+'googleimage':
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                reply(mess.wait)
                teks = args.join(' ')
                res = await googleImage(teks, google)
                function google(error, result){
                if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
                else {
                var gugIm = result
                var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
                }
                }
                break
case prefix+'google':
                const googleQuery = args.join(' ')
                if (!q) return reply(`Apa yang mau di cari?`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                reply(vars)
                }).catch(e => {
                console.log(e)
                dms.sendMessage(from, 'Google Error : ' + e);
                })
                break
case prefix+'trendtwit':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
			    data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
				reply(mess.wait)
				tek = '=================\n'
				for (let i of data.result) {
				tek += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
				}
				reply(tek.trim())
				break
case prefix+'imguploader': 
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                var jnckk = await  dms.downloadAndSaveMediaMessage(encmedia)
                var imgbb = require('imgbb-uploader')
                imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
                .then(data => {
                var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────`
                ibb = fs.readFileSync(jnckk)
                dms.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                throw err 
                })
                break
case prefix+'herolist':
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                await herolist().then((ress) => {
                let listt = `*List hero untuk feature ${prefix}herodetail nama hero*\n\n`
                for (var i = 0; i < ress.hero.length; i++) {
                listt += '-  ' + ress.hero[i] + '\n'
                }
                reply(listt)
                })
                break
case prefix+'herodetail':
                if (isBanned) return reply(mess.only.benned)
                if (!isUser) return reply(mess.only.userB)
                if (!q) return reply(`masukan nama hero`)
                reply(mess.wait)
                res = await herodetails(body.slice(12))
                her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
              reply(her)
              break
case prefix+'tinyurl':
              if (!q) return reply(`masukan url`)
              if (isBanned) return reply(mess.only.benned)    
              if (!isUser) return reply(mess.only.userB)
             try {
             link = args[0]
             anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
             reply(`${anu.data}`)
             } catch (e) {
             emror = String(e)
             reply(`${e}`)
             }
             break
case prefix+'detikvideo':
             if (!q) return reply(`masukan durasi`)
             if (isBanned) return reply(mess.only.benned)    
             if (!isUser) return reply(mess.only.userB)
	         encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await dms.downloadAndSaveMediaMessage(encmedia)
			 cokmatane = Number(args[0])
			 hah = fs.readFileSync(media)
	         dms.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
			 fs.unlinkSync(media)
		     break
case prefix+'lirik':
            if (isBanned) return reply(mess.only.benned)
            if (!isUser) return reply(mess.only.userB)
            if (args.length < 1) return reply('Judulnya?')
            reply(mess.wait)
            teks = args.join(' ')
            lirikLagu(teks).then((res) => {
            let lirik = `${res[0].result}`
            reply(lirik)
            })
            break
case prefix+'delete':
case prefix+'del':
case prefix+'d':
		   if (!isGroup)return reply(mess.only.group)
		   if (!isGroupAdmins) return reply(mess.only.admin)
		   dms.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		   tek = `Sukses delete pesan bot!`
		   await wan(tek, MessageType.text, tescuk, ` *Sukses* `)
		   break
case prefix+'promote':
		   if (isBanned) return reply(mess.only.benned)    
		   if (!isUser) return reply(mess.only.userB)
		   if (!q) return reply(`Tag orang yang mau dijadiin admin`)
		   if (!isGroup) return reply(mess.only.group)
		   if (!isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		   if (mek.message.extendedTextMessage === Error || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = 'Perintah di terima, anda menjdi admin :\n'
		   for (let _ of mentioned) {
		   teks += `@${_.split('@')[0]}\n`
		    }
		   mentions(teks, mentioned, true)
		   dms.groupMakeAdmin(from, mentioned)
		    } else {
		   mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
		   dms.groupMakeAdmin(from, mentioned)
		   }
		   break
case prefix+'unadmin':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (!q) return reply(`Tag orang yang mau diunadmin`)
			    //if (!isPublic) return reply(mess.only.publikG)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === Error || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Perintah di terima, anda tidak menjadi admin :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				dms.groupDemoteAdmin(from, mentioned)
				} else {
				mentions(`Perintah di terima, Menurunka : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
				dms.groupDemoteAdmin(from, mentioned)
				}
				break
case prefix+'buka-tutup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.only.benned)
gwetkkkke = await dms.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${a}Click OPEN untuk buka group\nClick CLOSE untuk menutup group${a}`,
"footerText": `Khusus Admin!`,
"buttons": [
{buttonId: 'OPEN', buttonText: {displayText: 'OPEN'}, type: 1},
{buttonId: 'CLOSE', buttonText: {displayText: 'CLOSE'}, type: 1}
],
headerType: 1
},
}, {quoted:mek})
await dms.relayWAMessage(gwetkkkke)
break
case prefix+'setnamegrup':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                dms.groupUpdateSubject(from, `${body.slice(9)}`)
                dms.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
case prefix+'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                dms.groupUpdateDescription(from, `${body.slice(9)}\nCreate By ©Ochobot`)
                dms.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: mek})
                break
case prefix+'setppgrup':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	            //if (!isPublic) return reply(mess.only.publikG)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await dms.downloadAndSaveMediaMessage(mek)
                    await dms.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
                    break
case prefix+'hidetag':
                if (isBanned) return reply(mess.only.benned)    
				if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				//if (!isPublic) return reply(mess.only.publikG)
					var value = body.slice(9)
					var group = await dms.groupMetadata(from)
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
					dms.sendMessage(from, options, text)
					break
case prefix+'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					tek = (args.length > 1) ? body.slice(8).trim() : ''
					tek += '\n'
					for (let mem of groupMembers) {
						tek += `╔➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ *Cie kena tag* ✪══`+ tek +'╚═══〘 ${name} BOT 〙═══', members_id, true)
					break
case prefix+'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`Yang mau di add siapa??\nContoh ${command} 6281290565513`)
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dms.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case prefix+'listadmins':
				case prefix+'listadmin':
				case prefix+'adminlist':
				case prefix+'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
					if (!isGroup) return reply(mess.only.group)
					tek = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						tek += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(tek, groupAdmins, true)
					break
case prefix+'infogc':
				case prefix+'groupinfo':
				case prefix+'infogrup':
				case prefix+'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				 //if (!isPublic) return reply(mess.only.publikG)
				if (!isUser) return reply(mess.only.userB)
                dms.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await dms.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        dms.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
case prefix+'ownergrup':
case prefix+'ownergroup':
                  if (isBanned) return reply(mess.only.benned)  
                  if (!isUser) return reply(mess.only.userB)
                 dms.updatePresence(from, Presence.composing) 
                 options = {
                 text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
                 contextInfo: { mentionedJid: [from] }
                 }
                 dms.sendMessage(from, options, text, { quoted: mek } )
				  break
case prefix+'linkgroup':
				case prefix+'linkgrup':
				case prefix+'linkgc':
				case prefix+'gruplink':
				case prefix+'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await dms.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    dms.sendMessage(from, yeh, text, {quoted: mek})
			        break
case prefix+'sticker':
case prefix+'s':
case prefix+'stiker':
                 reply(mess.wait)
                if (isBanned) return reply(mess.only.benned)    
                
                if (!isUser) return reply(mess.only.userB)
		        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		        const media = await dms.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
		        await ffmpeg(`${media}`)
		        .input(media)
		        .on('start', function (cmd) {
		         })
		       .on('error', function (err) {
		console.log(`Error : ${err}`)
  		fs.unlinkSync(media)
		reply(`Error : ${err}`)
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./database/sampah/data.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => { 
                if (error) return reply('error')
		    zanStick(from, fs.readFileSync(`./database/sampah/${sender}.webp`), mek)
		    fs.unlinkSync(media)	
		    fs.unlinkSync(`./database/sampah/${sender}.webp`)	
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./database/sampah/${sender}.webp`)
		} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    const media = await dms.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
			await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
		    fs.unlinkSync(media)
		    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		    reply('error')
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./database/sticker/data.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
		if (error) return reply('error')
	            zanStick(from, fs.readFileSync(`./database/sampah/${sender}.webp`), mek)
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./database/sampah/${sender}.webp`)
		    })
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./database/sampah/${sender}.webp`)
	        } else {
		reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
		}
case prefix+'toimg':
reply(mess.wait)
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await dms.downloadAndSaveMediaMessage(encmedia)
ran= getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`${a}「❗」Error Sticker to Foto${a}`)
buff = fs.readFileSync(ran)
dms.sendMessage(from, buff, image, {quoted: mek})
fs.unlinkSync(ran)
})
break
case prefix+'naruto':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)              
                tek = args.join(' ')
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${tek}`, {method: 'get'})
                dms.sendMessage(from, buff, image, {quoted: mek})
                break
case prefix+'flaming':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${tek}`, {method: 'get'})
                dms.sendMessage(from, buff, image, {quoted: mek})
                break
case prefix+'underwater':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                water = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${tek}`, {method: 'get'})
                dms.sendMessage(from, water, image, {quoted: mek})
                break
case prefix+'devil':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${tek}`, {method: 'get'})
                dms.sendMessage(from, buff, image, {quoted: mek})
                break
case prefix+'bear':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                mascot = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${tek}`, {method: 'get'})
                dms.sendMessage(from, mascot, image, {quoted: mek})
                break
case prefix+'crisp':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                trans = args.join(' ')
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${trans}`, {method: 'get'})
                dms.sendMessage(from, buff, image, {quoted: mek})
                break
case prefix+'glitch':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(`[❗] Contoh ${command} teks/teks`)
                reply(mess.wait)
                tahtar3 = args.join(' ')
                tahtar = tahtar3.split("/")[0];
			    tahtar2 = tahtar3.split("/")[1];
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/textpro/tiktok?teks1=${tahtar}&teks2=${tahtar2}`, {method: 'get'})
                dms.sendMessage(from, buff, image, {quoted: mek})
                break
case prefix+'csgo1':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo1 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=1`, {method: 'get'})
                dms.sendMessage(from, csgo1, image, {quoted: mek})
                break
case prefix+'csgo2':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo2 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=2`, {method: 'get'})
                dms.sendMessage(from, csgo2, image, {quoted: mek})
                break
case prefix+'csgo3':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo3 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=3`, {method: 'get'})
                dms.sendMessage(from, csgo3, image, {quoted: mek})
                break
case prefix+'csgo4':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo5 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=4`, {method: 'get'})
                dms.sendMessage(from, csgo5, image, {quoted: mek})
                break
case prefix+'csgo5':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo5 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=5`, {method: 'get'})
                dms.sendMessage(from, csgo5, image, {quoted: mek})
                break
case prefix+'csgo6':
                if (!isUser) return reply(mess.only.userB)
                //if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                tek = args.join(' ')
                csgo6 = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${tek}&background=0`, {method: 'get'})
                dms.sendMessage(from, csgo6, image, {quoted: mek})
                break
case prefix+'cup':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!q) return reply(mess.teks)
                reply(mess.wait)
                cup = args.join(' ')
                 if (args.length < 1) return reply('Teksnya mana gan??')
                 if (args.length > 5) return reply('karakter minimal 5')
                 buff = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${cup}`, {method: 'get'})
                 dms.sendMessage(from, buff, image, {quoted: mek})
                 
                 break
default:
//button
if (buttonsR === 'CLOSE') {
try {
reply(`Berhasil membuka group : ${groupMetadata.subject}`)
dms.groupSettingChange(from, GroupSettingChange.messageSend, true)
} catch (e) {
console.log('Error : %s', color(e, 'white'))
   }
}
if (buttonsR === 'OPEN') {
try {
 reply(`Berhasil membuka group : ${groupMetadata.subject}`)
dms.groupSettingChange(from, GroupSettingChange.messageSend, false)
} catch (e) {
console.log('Error : %s', color(e, 'white'))
  }
}
//end
 }
} catch(e) {
                e = String(e)
			   if (e.includes('this.isZero')){
return
}
			console.log('%s', color(e, 'white'))
			//dms.sendMessage(`${s}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Owner Ochobot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./img/logo.jpg'),sourceUrl:"https://wa.me/6281290565513?text=Hi Kak Pox>///<"}}})
}
})
}
starts()
