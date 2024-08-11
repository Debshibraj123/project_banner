const prisma = require('../config');

const getBanner = async (req, res) => {
  try {
    const banner = await prisma.banner.findUnique({ where: { id: 1 } });
    if (banner) {
      res.status(200).json(banner);
    } else {
      res.status(404).json({ message: 'Banner not found' });
    }
  } catch (error) {
    console.error('Error fetching banner:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateBanner = async (req, res) => {
  const { description, link, timer, visible } = req.body;

  // Check if all required fields are present
  if (!description || !link || timer === undefined || visible === undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const banner = await prisma.banner.upsert({
      where: { id: 1 },
      update: { description, link, timer, visible },
      create: { description, link, timer, visible },
    });
    res.status(200).json(banner);
  } catch (error) {
    console.error('Error updating banner:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getBanner, updateBanner };
