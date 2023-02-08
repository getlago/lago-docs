---
sidebar_position: 1
---

# Oso (Authorization as a service)

[Oso](https://www.osohq.com/)  is an authorization-as-a-service provider partnering with Lago to offer entitlements. You can use either the open-source version (available on [Github](https://github.com/osohq/oso)) or the cloud-hosted version. To create entitlements with Lago, you must open an account on Oso.

Oso offers a suitable solution for Entitlements. For more information, please refer to [Oso's documentation](https://www.osohq.com/docs/guides/model-your-apps-authz#entitlements).


## Define available features and plan's quota
First, define the available features for each plan. For instance, the Basic plan has a limited set of features, while the Premium plan offers the full range.

In addition to this, you can use Lago to bill metering and overage. This information can then be passed directly to Oso's `plan_quota` and `quota_used` to limit usage for a specific feature.

## Example
[Oso's documentation](https://www.osohq.com/docs/guides/model-your-apps-authz#entitlements) explains the following example of entitlements properly.

```ruby
actor User { }
 
resource Organization {
    roles = ["admin", "member"];
    permissions = ["create_repository"];
 
    "member" if "admin";
}
 
 
resource Plan { 
    roles = ["subscriber"];
    relations = { subscribed_organization: Organization };
    
    "subscriber" if role on "subscribed_organization";
}
 
resource Feature {
    relations = { plan: Plan };
}
 
declare plan_quota(Plan, Feature, Integer);
declare quota_used(Organization, Feature, Integer);
 
plan_quota(Plan{"pro"}, Feature{"repository"}, 10);
plan_quota(Plan{"basic"}, Feature{"repository"}, 0);
 
has_quota_remaining(org: Organization, feature: Feature) if
    has_quota(org, feature, quota) and
    quota_used(org, feature, used) and
    used < quota;
 
has_quota(org: Organization, feature: Feature, quota: Integer) if
    plan matches Plan and
    has_relation(plan, "subscribed", org) and
    plan_quota(plan, feature, quota);
 
 
has_permission(user: User, "create_repository", org: Organization) if
    has_role(user, "member", org) and
    has_quota_remaining(org, Feature{"repository"});
 
 
 
test "members can create repositorys if they have quota" {
    setup {
        quota_used(Organization{"apple"}, Feature{"repository"}, 5);
        quota_used(Organization{"netflix"}, Feature{"repository"}, 10);
        quota_used(Organization{"amazon"}, Feature{"repository"}, 0);
        has_relation(Plan{"pro"}, "subscribed", Organization{"apple"});
        has_relation(Plan{"pro"}, "subscribed", Organization{"netflix"});
        has_relation(Plan{"basic"}, "subscribed", Organization{"amazon"});
        has_role(User{"alice"}, "member", Organization{"apple"});
        has_role(User{"bob"}, "member", Organization{"netflix"});
        has_role(User{"charlie"}, "member", Organization{"amazon"});
    }
    assert has_quota_remaining(Organization{"apple"}, Feature{"repository"});
    # Apple has quota remaining, so all good
    assert allow(User{"alice"}, "create_repository", Organization{"apple"});
    # Netflix has used all quota 
    assert_not allow(User{"bob"}, "create_repository", Organization{"netflix"});
    # Amazon doesn't have any quota left
    assert_not allow(User{"charlie"}, "create_repository", Organization{"amazon"});
}
```