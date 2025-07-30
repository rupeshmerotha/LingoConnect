import { useState, useEffect } from "react";
import useAuthUser from "../hooks/useAuthUser";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { LoaderIcon, SettingsIcon, ShuffleIcon } from "lucide-react";
import { LANGUAGES } from "../constants";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const { authUser } = useAuthUser();
  const { updateProfileMutation, isPending } = useUpdateProfile();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    profilePic: authUser?.profilePic || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileMutation(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random profile picture generated!");
  };

  // Update form state when authUser changes
  useEffect(() => {
    if (authUser) {
      setFormState({
        fullName: authUser.fullName || "",
        bio: authUser.bio || "",
        nativeLanguage: authUser.nativeLanguage || "",
        learningLanguage: authUser.learningLanguage || "",
        profilePic: authUser.profilePic || "",
      });
    }
  }, [authUser]);

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <SettingsIcon className="size-8 text-primary" />
              <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* PROFILE PIC SECTION */}
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-base-300 rounded-lg">
                <h3 className="text-lg font-semibold">Profile Picture</h3>
                
                {/* IMAGE PREVIEW */}
                <div className="size-32 rounded-full bg-base-100 overflow-hidden border-4 border-base-200">
                  {formState.profilePic ? (
                    <img
                      src={formState.profilePic}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <SettingsIcon className="size-12 text-base-content opacity-40" />
                    </div>
                  )}
                </div>

                {/* Generate Random Avatar BTN */}
                <button type="button" onClick={handleRandomAvatar} className="btn btn-accent">
                  <ShuffleIcon className="size-4 mr-2" />
                  Generate Random Avatar
                </button>
              </div>

              {/* FULL NAME */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  className="input input-bordered w-full"
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* BIO */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Bio</span>
                </label>
                <textarea
                  name="bio"
                  value={formState.bio}
                  onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Tell others about yourself and your language learning goals"
                />
              </div>

              {/* LANGUAGES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NATIVE LANGUAGE */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Native Language</span>
                  </label>
                  <select
                    name="nativeLanguage"
                    value={formState.nativeLanguage}
                    onChange={(e) => setFormState({ ...formState, nativeLanguage: e.target.value })}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select your native language</option>
                    {LANGUAGES.map((lang) => (
                      <option key={`native-${lang}`} value={lang.toLowerCase()}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                {/* LEARNING LANGUAGE */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Learning Language</span>
                  </label>
                  <select
                    name="learningLanguage"
                    value={formState.learningLanguage}
                    onChange={(e) => setFormState({ ...formState, learningLanguage: e.target.value })}
                    className="select select-bordered w-full"
                  >
                    <option value="">Select language you're learning</option>
                    {LANGUAGES.map((lang) => (
                      <option key={`learning-${lang}`} value={lang.toLowerCase()}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* LOCATION (READ-ONLY) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Location</span>
                </label>
                <input
                  type="text"
                  value={authUser?.location || ""}
                  className="input input-bordered w-full bg-base-300"
                  placeholder="Location"
                  disabled
                />
                <label className="label">
                  <span className="label-text-alt text-base-content opacity-70">
                    Location can only be set during onboarding
                  </span>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-end">
                <button 
                  className="btn btn-primary" 
                  disabled={isPending || !formState.fullName.trim()} 
                  type="submit"
                >
                  {!isPending ? (
                    <>
                      <SettingsIcon className="size-5 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <LoaderIcon className="animate-spin size-5 mr-2" />
                      Saving...
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 