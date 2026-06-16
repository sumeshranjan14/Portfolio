import { resumeData } from "@/data/resume"

export async function getChatResponse(query: string): Promise<string> {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("skills") || lowerQuery.includes("stack") || lowerQuery.includes("technology")) {
        const allSkills = [
            ...resumeData.skills.languages,
            ...resumeData.skills.backendFrameworks,
            ...resumeData.skills.frontendWeb,
            ...resumeData.skills.databases,
            ...resumeData.skills.csFundamentals,
            ...resumeData.skills.tools
        ].join(", ")
        return `Sumesh is skilled in: ${allSkills}.`
    }

    if (lowerQuery.includes("project") || lowerQuery.includes("work")) {
        const projects = resumeData.projects.map(p => `${p.title} (${p.tech})`).join(", ")
        return `Sumesh has worked on several projects including: ${projects}. You can view them in the Projects section.`
    }

    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone")) {
        return `You can contact Sumesh via email at ${resumeData.email} or phone at ${resumeData.phone}.`
    }

    if (lowerQuery.includes("education") || lowerQuery.includes("college") || lowerQuery.includes("degree")) {
        return `Sumesh is currently pursuing B.Tech CSE at ${resumeData.education[0].institution}.`
    }

    if (lowerQuery.includes("experience") || lowerQuery.includes("leadership")) {
        const roles = resumeData.leadership.map(l => `${l.role} of ${l.organization}`).join(", ")
        return `Sumesh has held leadership and student roles including: ${roles}.`
    }

    if (lowerQuery.includes("summary") || lowerQuery.includes("about") || lowerQuery.includes("who is")) {
        return resumeData.summary
    }

    return "I can tell you about Sumesh's skills, projects, education, and experience. What would you like to know?"
}
