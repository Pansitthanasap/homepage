import prisma from "@/lib/prisma";

export async function GET() {
    const applicants =
    (await prisma.applicant.findMany()).map((item) => ({
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phone: item.phone,
          jobTitle: item.position,
          fileName: item.resumeFileName,
          fileUrl: item.resumeUrl,
        }))
    ;
    return Response.json(applicants);
}