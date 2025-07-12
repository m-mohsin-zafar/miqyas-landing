import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API route handler for fetching content by type
 * This runs on the server and can access the file system
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ contentType: string }> }
) {
  // Await the params to get the contentType
  const { contentType } = await context.params;
  
  // Validate content type to prevent directory traversal
  const validContentTypes = ['heroSection', 'faqSection', 'featureGrid', 'howItWorks'];
  
  if (!validContentTypes.includes(contentType)) {
    return NextResponse.json(
      { error: 'Invalid content type requested' },
      { status: 400 }
    );
  }
  
  try {
    // Read the JSON file from the data directory
    const filePath = path.join(process.cwd(), 'app', 'data', `${contentType}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Add a small delay to simulate network latency for demo purposes
    // await new Promise(resolve => setTimeout(resolve, 200));
    
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error reading content file for ${contentType}:`, error);
    
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    );
  }
}
