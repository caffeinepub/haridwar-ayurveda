import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type and storage
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead capture form types and storage
  type ConsultationRequest = {
    name : Text;
    contact : Text;
    message : Text;
  };

  let consultationRequests = Map.empty<Text, ConsultationRequest>();

  // Public endpoint - accessible to everyone including guests
  public shared ({ caller }) func submitConsultationRequest(name : Text, contact : Text, message : Text) : async () {
    validateInput(name, contact, message);
    let request : ConsultationRequest = {
      name;
      contact;
      message;
    };
    consultationRequests.add(name, request);
    ();
  };

  func validateInput(name : Text, contact : Text, message : Text) {
    if (Text.equal(name, "") or Text.equal(contact, "") or Text.equal(message, "")) {
      Runtime.trap("All fields must be filled.");
    };
  };

  // Admin-only endpoint - contains sensitive customer data
  public query ({ caller }) func getRequests() : async [ConsultationRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view consultation requests");
    };
    consultationRequests.values().toArray();
  };
};
