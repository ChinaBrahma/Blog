const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:  String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:  String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:  String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinyKey: String(import.meta.env.VITE_APP_TINY_URL_KEY),
}

export default conf 