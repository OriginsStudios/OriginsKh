
import { NextResponse } from 'next/server';

// Ensure environment variables are defined
const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

export async function GET() {  // Removed unused 'req' parameter
  // Check for missing environment variables
  if (!INSTAGRAM_TOKEN || !INSTAGRAM_USER_ID) {
    console.error('Missing Instagram configuration: TOKEN or USER_ID not set');
    return NextResponse.json(
      { error: 'Server configuration error: Instagram credentials missing' },
      { status: 500 }
    );
  }

  try {
    // Define fields to fetch, including thumbnail_url for videos
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const url = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=${fields}&access_token=${INSTAGRAM_TOKEN}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if response is successful
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Instagram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch Instagram data', details: errorData.error?.message || 'Unknown error' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Validate response structure
    if (!data || !Array.isArray(data.data)) {
      console.error('Invalid Instagram response structure:', data);
      return NextResponse.json(
        { error: 'Invalid data from Instagram API' },
        { status: 500 }
      );
    }

    // Return the posts array directly for consistency with frontend
    const limitedPosts = data.data
      .sort((a: { timestamp: string | number | Date; }, b: { timestamp: string | number | Date; }) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 8);

    return NextResponse.json(limitedPosts, { status: 200 });

  } catch (err) {
    console.error('Error fetching Instagram data:', err);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram data', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Optional: Cache configuration for production
export const dynamic = 'force-dynamic'; // Disable Next.js caching for fresh API calls