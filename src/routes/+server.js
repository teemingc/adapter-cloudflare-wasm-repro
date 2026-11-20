import ImageResponse from 'takumi-js/response';

export function GET() {
	return new ImageResponse('<div style="font-size: 48px">hello</div>', {
		width: 400,
		height: 200
	});
}
