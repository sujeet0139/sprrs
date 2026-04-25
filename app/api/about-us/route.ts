import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { file, content } = body;

    // Basic validation
    if (!file || !content) {
      return NextResponse.json(
        { error: 'File name and content are required.' },
        { status: 400 }
      );
    }

    // Security check: Prevent path traversal by only allowing specific file names
    const allowedFiles = ['faqs', 'about', 'news', 'birthdays', 'testimonials'];
    if (!allowedFiles.includes(file)) {
      return NextResponse.json(
        { error: 'Invalid file specified. Unauthorized operation.' },
        { status: 403 }
      );
    }

    // Determine the absolute path to the JSON file inside the "data" directory
    const filePath = path.join(process.cwd(), 'data', `${file}.json`);

    // Write the updated JSON content back to the file with nice formatting (2 spaces)
    await fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: `${file}.json updated successfully!` });
  } catch (error) {
    console.error('Error updating JSON data:', error);
    return NextResponse.json({ error: 'Failed to update data server-side.' }, { status: 500 });
  }
}