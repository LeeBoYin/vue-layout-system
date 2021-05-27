const loremList = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	'Nulla aliquet enim tortor at',
	'Sed faucibus turpis in eu mi',
	'Ultrices neque ornare aenean euismod elementum',
	'Ac turpis egestas integer eget aliquet nibh praesent',
	'Amet nulla facilisi morbi tempus iaculis urna',
	'Enim ut tellus elementum sagittis vitae et leo duis',
	'Etiam tempor orci eu lobortis elementum nibh',
	'Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat',
	'Accumsan lacus vel facilisis volutpat',
	'Justo laoreet sit amet cursus sit amet',
	'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum',
	'Mauris rhoncus aenean vel elit scelerisque',
	'Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus',
	'Mi sit amet mauris commodo quis imperdiet massa',
	'Duis ut diam quam nulla porttitor massa id',
	'Rhoncus urna neque viverra justo nec ultrices',
	'Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam',
	'Egestas purus viverra accumsan in',
	'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum',
	'In fermentum posuere urna nec tincidunt praesent',
	'Sem integer vitae justo eget',
	'Fames ac turpis egestas integer eget aliquet',
	'Eget sit amet tellus cras adipiscing enim eu turpis',
	'Bibendum at varius vel pharetra',
	'At lectus urna duis convallis convallis tellus',
	'Urna condimentum mattis pellentesque id nibh',
	'In iaculis nunc sed augue lacus viverra vitae congue',
	'Volutpat blandit aliquam etiam erat',
	'Sagittis nisl rhoncus mattis rhoncus urna neque',
	'Porta lorem mollis aliquam ut porttitor leo',
	'Semper auctor neque vitae tempus quam pellentesque nec nam aliquam',
	'Pellentesque adipiscing commodo elit at imperdiet',
	'Elementum sagittis vitae et leo duis ut diam quam nulla',
	'Malesuada bibendum arcu vitae elementum curabitur vitae nunc',
	'Elementum integer enim neque volutpat ac tincidunt vitae',
	'Sed viverra tellus in hac habitasse platea',
	'Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna',
	'Duis ut diam quam nulla porttitor',
	'Eget nunc lobortis mattis aliquam faucibus purus',
	'Viverra mauris in aliquam sem',
	'Aliquet enim tortor at auctor urna nunc',
	'Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae',
	'Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras',
	'Mauris augue neque gravida in fermentum et sollicitudin',
	'Ultricies lacus sed turpis tincidunt id aliquet risus feugiat',
	'Amet aliquam id diam maecenas ultricies mi eget mauris',
	'Nunc scelerisque viverra mauris in aliquam sem',
	'In vitae turpis massa sed elementum tempus egestas sed sed',
	'Netus et malesuada fames ac turpis egestas sed tempus',
	'Venenatis urna cursus eget nunc scelerisque viverra mauris',
	'Tellus pellentesque eu tincidunt tortor aliquam nulla',
	'Massa tempor nec feugiat nisl pretium fusce id velit',
	'Cursus metus aliquam eleifend mi in nulla posuere',
	'Adipiscing enim eu turpis egestas pretium aenean pharetra magna',
	'In massa tempor nec feugiat nisl pretium fusce',
	'Risus sed vulputate odio ut enim blandit',
	'Tempus iaculis urna id volutpat lacus laoreet non',
	'Vel pharetra vel turpis nunc eget lorem',
	'Diam vulputate ut pharetra sit amet',
	'Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere',
	'Ut ornare lectus sit amet',
	'Quam adipiscing vitae proin sagittis nisl',
	'Posuere lorem ipsum dolor sit amet',
	'Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et',
	'Id nibh tortor id aliquet lectus proin nibh nisl condimentum',
	'Vitae auctor eu augue ut lectus arcu bibendum at varius',
	'Cras pulvinar mattis nunc sed blandit',
	'Integer enim neque volutpat ac tincidunt',
	'Pharetra massa massa ultricies mi quis hendrerit dolor magna eget',
	'Ac ut consequat semper viverra',
	'Placerat vestibulum lectus mauris ultrices eros in cursus',
	'Platea dictumst quisque sagittis purus sit',
	'Nec feugiat nisl pretium fusce id velit',
	'Facilisis volutpat est velit egestas dui',
	'In ornare quam viverra orci',
];

export const getRandomLorem = ({ sections = 1 } = {}) => {
	const lorems = [];
	for (let i = 0; i < sections; i++) {
		lorems.push(loremList[Math.floor(Math.random() * loremList.length)]);
	}
	return lorems.join('. ');
};
