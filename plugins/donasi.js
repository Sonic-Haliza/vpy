let handler = async m => m.reply(`
            .Dana/Pulsa.

          082211991425  
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
