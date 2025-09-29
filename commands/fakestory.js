let handler = async (m, { conn, text }) => {
  try {
    if (!text) return m.reply('*Example :* .fakestory Jawa Jawa Di Sikse😋')
    let [u, ...c] = text.split(',')
    let username = c.length ? u.trim() : m.pushName
    let caption = c.length ? c.join(',').trim() : u
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://raw.githubusercontent.com/upcld/dat3/main/uploads/0d7c04-1759118139651.jpg')
    await conn.sendMessage(
      m.chat,
      {
        image: {
          url: `https://api.ryzumi.vip/api/image/fake-story?username=${encodeURIComponent(username)}&caption=${encodeURIComponent(caption)}&avatar=${encodeURIComponent(pp)}`
        }
      },
      { quoted: m }
    )
  } catch (e) {
    m.reply(e.message)
  }
}

handler.help = ['fakestory']
handler.command = ['fakestory']
handler.tags = ['maker']

export default handler