export const useStoreProp = () => {
  const BASE: Array<string> = new Array<string>('woman', 'model', 'miss universe model', 'celebrity', 'lingerie model', 'athlete', 'bodybuilder', 'cyborg', 'sorority girl', 'bimbo', 'woman + man');
  const NUMBER_OF_PEOPLE: Array<string> = new Array<string>('one', 'two', 'several');
  const BODY: Array<string> = new Array<string>('busty', 'huge boobs', 'perfect boobs', 'small tits', 'beautiful', 'glasses', 'sunglasses', 'tattoos', 'lipstick', 'muscular', 'big ass', 'small ass', 'skinny', 'abs', 'thick', 'chubby', 'fat', 'big hips', 'long legs', 'short', 'tall', 'perfect body', 'pubic hair', 'short hair', 'long hair', 'curly hair', 'pregnant', 'tanned skin', 'fairer skin', 'dark skin', 'oiled body');
  // const AGE: Array<string> = new Array<string>('18', '20', '30', '40', '50', '60', '70', '80');
  // const FACE: Array<string> = new Array<string>('happy', 'sad', 'serious', 'laughing', 'seductive', 'pouting lips', 'shocked', 'angry', 'ahegao');
  const HAIR_COLOR: Array<string> = new Array<string>('blonde', 'brunette', 'ginger', 'white hair', 'black hair', 'blue hair', 'green hair', 'purple hair', 'pink hair');
  const HAIR_STYLE: Array<string> = new Array<string>('bobcut', 'pigtails', 'hair bun', 'pixie', 'ponytail', 'messy', 'bangs', 'braided', 'slicked', 'straight');
  const ETHNICITY: Array<string> = new Array<string>('african', 'arabic', 'asian', 'black', 'brazilian', 'british', 'chinese', 'czech', 'dutch', 'egyptian', 'ethiopian', 'filipina', 'french', 'german', 'greek', 'hungarian', 'indian', 'indonesian', 'irish', 'italian', 'japanese', 'jewish', 'korean', 'latina', 'malaysian', 'middle eastern', 'mongolian', 'native american', 'nigerian', 'nilotic', 'persian', 'polynesian', 'portuguese', 'russian', 'scandinavian', 'spanish', 'swedish', 'thai', 'turkish', 'vietnamese', 'white');
  // const _STYLE: Array<string> = new Array<string>('mirror selfie', 'painting', 'black and white', 'retro', 'film photo', 'soft anime', 'crisp anime', 'soft + warm', 'illustration', 'dark fantasy', 'warm anime', 'cyberpunk', 'skin detail', 'charcoal', '3d', 'watercolor', 'comic');
  // const SETTING: Array<string> = new Array<string>('bar', 'bathroom', 'beach', 'bedroom', 'bus', 'cafe', 'car', 'casino', 'cave', 'changing room', 'church', 'club', 'couch', 'desert', 'forest', 'grocery', 'gym', 'hospital', 'hot tub', 'jungle', 'kitchen', 'lake', 'locker room', 'mall', 'meadow', 'moon', 'mountains', 'oasis', 'office', 'onsen', 'party', 'pool', 'prison', 'restaurant', 'sauna', 'shower', 'snow', 'street', 'strip club', 'tent', 'train', 'underwater', 'wedding', 'yacht', 'yard');
  // const VIEW: Array<string> = new Array<string>('front view', 'side view', 'back view', 'close-up view');
  // const ACTION: Array<string> = new Array<string>('yoga', 'sleeping', 'squatting', 'cooking', 'eating', 'jumping', 'working out', 't-pose', 'bathing', 'gaming', 'plank', 'bending over', 'spreading legs', 'cumshot', 'on back', 'straddling', 'swimming', 'licking', 'studying', 'cheering', 'running', 'fighting', 'smoking', 'yawning');
  const CLOTHING: Array<string> = new Array<string>('nude', '60', '70', '80', '90', 'angel', 'apron', 'basketball', 'bathrobe', 'bdsm', 'beach', 'beach volleyball', 'bikini', 'blouse', 'bodypaint', 'bomber', 'boots', 'bow tie', 'bows', 'bra', 'casual', 'cheerleader', 'chemise', 'choker', 'clown', 'construction worker', 'corset', 'cosplay', 'crop top', 'daisy dukes', 'devil', 'dirndl', 'doctor', 'dominantrix', 'dress', 'face mask', 'fantasy armor', 'firefighter', 'fishnet', 'flight attendant', 'fur', 'geisha', 'gloves', 'golf', 'goth', 'halloween', 'harem pants', 'harlequin', 'hat', 'high heels', 'high socks', 'hijab', 'hip hop', 'jacket', 'jeans', 'jumpsuit', 'kilt', 'kimono', 'lab coat', 'latex', 'leather', 'lingerie', 'long skirt', 'lumberjack', 'maid', 'martial arts', 'mech suit', 'medieval', 'mesh', 'micro skirt', 'microkini', 'military', 'mini skirt', 'nightgown', 'ninja', 'niqab', 'nun', 'nurse', 'one piece swimsuit', 'onesie', 'pajamas', 'panties', 'pantyhouse', 'parka', 'pilot', 'pirate', 'police', 'polo', 'professor', 'push-up bra', 'race driver', 'roman', 'sailor', 'salwar', 'santa', 'sari', 'satin', 'scarf', 'sci-fi armor', 'secretary', 'shirt', 'short shorts', 'soccer', 'space suit', 'spandex', 'sports', 'sports bra', 'steampunk', 'stockings', 'stylish', 'suit', 'sundress', 'superhero', 'suspender belt', 'sweater', 'tailcoat', 'tank top', 'teacher', 'tennis', 'thigh socks', 'thong', 'tie', 'towel', 'traditional', 'trench coat', 'tribal', 'tunic', 'underwear', 'vampire', 'victorian', 'viking', 'waitress', 'wedding', 'western', 'witch', 'yoga pants');
  // const CLOTHING_MODIFIERS: Array<string> = new Array<string>('partially nude', 'topless', 'transparent');
  // const ACCESSORIES_OBJECTS: Array<string> = new Array<string>('beer', 'diamond jewelry', 'gold jewelry', 'jewelry', 'pearl jewelry', 'wine', 'dildo', 'cocktail', 'keys', 'butt plug', 'cigarette', 'cigar', 'smartphone', 'joystick', 'piercing');
  // const MODIFIERS_EFFECTS: Array<string> = new Array<string>('bright lighting', 'dark lighting');
  const GENERATOR_ID_PROPS: { generatorId: string, abbr: string }[] = [
    {generatorId: 'realisticDefault', abbr: '📷 REALISTIC'},
    {generatorId: 'realisticMissionary', abbr: '📷 Realistic - 🥵 Missionary'},
    {generatorId: 'realisticDoggy', abbr: '📷 Realistic - 🐶 Doggystyle POV'},
    {generatorId: 'realisticBlowjob', abbr: '📷 Realistic - 🍆 Blowjob'},
    {generatorId: 'realisticTentacles', abbr: '📷 Realistic - 🐙 Tentacles'},
    {generatorId: 'animeDefault', abbr: '🌸 ANIME'},
    {generatorId: 'animeBlowjob', abbr: '🌸 Anime - 🍆 Blowjob'},
    {generatorId: 'animeMissionary', abbr: '🌸 Anime - 🥵 Missionary'},
    {generatorId: 'animeTentacles', abbr: '🌸 Anime - 🐙 Tentacles'},
    {generatorId: 'animePastelDefault', abbr: '🌺 PASTEL ANIME'},
    {generatorId: 'animePastelBlowjob', abbr: '🌺 Pastel Anime - 🍆 Blowjob'},
    {generatorId: 'animePastelMissionary', abbr: '🌺 Pastel Anime - 🥵 Missionary'},
    {generatorId: 'cartoonDefault', abbr: '📺 CARTOON'},
    {generatorId: 'cartoonBlowjob', abbr: '📺 Cartoon - 🍆 Blowjob'},
    {generatorId: 'cartoonMissionary', abbr: '📺 Cartoon - 🥵 Missionary'},
    {generatorId: 'animeInkDefault', abbr: '✒️ INK ANIME'},
    {generatorId: 'animeInkBlowjob', abbr: '✒️ Ink Anime - 🍆 Blowjob'},
    {generatorId: 'animeInkMissionary', abbr: '✒️ Ink Anime - 🥵 Missionary'},
    {generatorId: 'animeSoftDefault', abbr: '🎀 SOFT ANIME'},
    {generatorId: 'animeSoftBlowjob', abbr: '🎀 Soft Anime - 🍆 Blowjob'},
    {generatorId: 'animeSoftMissionary', abbr: '🎀 Soft Anime - 🥵 Missionary'},
    {generatorId: 'artisticDefault', abbr: '🎨 ARTISTIC'},
  ];
  const POSES: Array<string> = new Array<string>(
    'Default', 'POV Missionary', 'POV Blowjob', 'POV Doggystyle', 'Cum in Mouth', 'After Sex', 'Handjob',
    'Carrying Sex', 'Flashing Boobs', 'Breast Squeeze', 'Front View Cowgirl', 'ButtJob', 'Side View Blowjob',
    'Stick out Tongue', 'POV Spitroast', 'Just Before Sex', 'POV Threesome BlowJob', 'Grab Ass', 'Mating Press',
    'POV Reverse Cowgirl', 'Thigh Sex', 'POV Anal', 'Piledrive', 'Vagina Spread', 'Imminent Sex',
    'Female Masturbation', 'Jacko Pose', 'Sideway Ass', 'Titjob', 'Titjob Real', 'Titjob Anime', 'Spread Ass',
    'Bukkake', 'Spooning', 'Amazon Position', 'On/Off Clothing', 'Shirt Pull', 'Cheek Bulge Blowjob',
    'Solo Breast Grab', 'From Below', 'Resting On Stomach', 'Blowjob Under Desk', 'Penis',
    'Breasts Pressed Against Glass', 'Reverse Deepthroat', 'Orgy', 'Cum on Ass', 'Cumshot', 'Ass On Glass',
    'Multiple Hands', 'Facesitting', 'On Off', 'Side Blowjob', 'Kneeling', 'POV Breast Grab',
    'Surrounded by Penises', 'Orgasm Face', 'Flashing In Public', 'Mooning', 'Wet Tshirt', 'Lesbian Oral',
    'Lesbian Fingering', 'Lesbian Scissoring', 'Gay Cowboy Anime', 'Gay Cowboy Real', 'Gay Grabbing',
    'BDSM Suspension', 'BDSM Tied Up', 'BDSM Tape', 'BDSM Ballgag', 'BDSM Leash', 'Downblouse', 'Sitting',
    'Vagina', 'Showering', 'Cum Bath', 'Cuddling', 'Lesbian Cuddling', 'Gay Cuddling', 'POV Cowgirl', 'Feet',
    'Multiple Mooning', 'Giant', 'Upset', 'Disgusted', 'Scared', 'Winking', 'Angry', 'Smiling', 'Laughing',
    'Ouch', 'Shocked', 'Side Blowjob Real', 'Sucking Nipple', 'Finger Sucking', 'Showing off Ass',
    'Wind Lift/ Nip Slip', 'Reverse Blowjob', 'Lying Down Feet', 'Footjob', 'Dildo', 'Handbra/Holding Boobs',
    'Milking Machine', 'Panties Off', 'Double Handjob', 'Undressing', 'Bubble Bath', 'Caught Naked Embarrassed',
    'Gloryhole', 'Xray Glasses', 'Man Grabbing Boobs', 'Glory Wall', 'Wind Lift', 'POV Deepthroat',
    'POV Strangling', 'Licking Dick');
  const FILTERS: Array<string> = new Array<string>('Default', 'Cyberpunk', 'VHS', 'Manga', 'Flash', 'Analog', 'Professional', 'Cinematic', 'Studio', 'Polaroid', 'Vintage');
  const _STYLE: Array<string> = new Array<string>('Real', 'Anime', 'Hyperreal', 'Hyperanime', 'K-Pop', 'Fur');

  return {
    BASE,
    NUMBER_OF_PEOPLE,
    BODY,
    // AGE,
    // FACE,
    HAIR_COLOR,
    HAIR_STYLE,
    ETHNICITY,
    _STYLE,
    // SETTING,
    // VIEW,
    // ACTION,
    CLOTHING,
    // CLOTHING_MODIFIERS,
    // ACCESSORIES_OBJECTS,
    // MODIFIERS_EFFECTS,
    GENERATOR_ID_PROPS,
    POSES,
    FILTERS,
  }
}


























































