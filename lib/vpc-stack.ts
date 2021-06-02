import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class TypescriptExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}

export class VpcStack extends cdk.Stack {
  readonly vpc: ec2.Vpc;
  readonly ingressSecurityGroup: ec2.SecurityGroup
  readonly egressSecurityGroup: ec2.SecurityGroup;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Place resource definitions here.
    this.vpc = new ec2.Vpc(this, 'CustomVPC', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [{
        cidrMask: 26,
        name: 'isolatedSubnet',
        subnetType: ec2.SubnetType.ISOLATED,
      }],
      natGateways: 0
    });
  }
}
